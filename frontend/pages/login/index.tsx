import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
import { Axios, AxiosError } from "axios";
import { useFormik } from "formik";
import { ApiError } from "next/dist/server/api-utils";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import * as Yup from 'yup';
import InputField from "../../components/InputField";
import { AuthContext } from "../../context/auth";
import API from "../../services/axios";

const signIn = async (email:string, password:string) => {
  const response = await API.post("/api/login/", {
    username: email,
    password: password
  })
  return response;
}

export default function Login() {
  const [apiError, setApiError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('E-mail inválido.').required('Campo obrigatório.'),
      password: Yup.string().required('Campo obrigatório.'),
    }),
    onSubmit: async (values) => {
      await signIn(values.email, values.password)
      .then((response) => {
        console.log("DEU CERTO")
        console.log(response)
      })
      .catch((error: AxiosError) => {
        console.log("DEU ERRADO")
        console.log(error)
        setApiError(error)
      })
    }
  })

  return (
    <Flex
      backgroundColor={"green.100"}
      width={"100vw"}
      height={"100vh"}
      flexDirection={"column"}
      alignItems="center"
      justifyContent={"center"}
    >
      <Stack
        spacing={4}
        p="1rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
        width={"500px"}
        >
        { apiError && (
          <Alert status='error'>
            <AlertIcon />
            <AlertDescription>A senha ou o e-mail digitado está incorreto.</AlertDescription>
          </Alert>
        )}
        <form action="POST" onSubmit={formik.handleSubmit}>
          <Box p={"1rem"}>
            <InputField 
              type="email"
              placeholder="Digite seu e-mail"
              name="email"
              label="E-mail:"
              formik={formik}
            />
            <InputField
              type="password"
              placeholder="Digite sua senha"
              name="password"
              label="Senha:"
              formik={formik}
            />
            <Button
              type="submit"
              width={"full"}
              variant="solid"
              colorScheme="teal"
              borderRadius={0}
              mt="1rem"
            >
              Entrar
            </Button>
          </Box>
        </form>
      </Stack>
    </Flex>
  )
}