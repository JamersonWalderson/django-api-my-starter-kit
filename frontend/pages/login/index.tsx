import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from 'yup';
import InputField from "../../components/InputField";
import { AuthContext } from "../../context/auth";
import API from "../../services/axios";

export default function Login() {
  const { signIn } = useContext(AuthContext)
  const [error, setError] = useState({} as AxiosError);

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
      await API.post("/api/login/", {
        username: values.email,
        password: values.password
      })
      .then((response) => {
        console.log("DEU CERTO")
        console.log(response)
      })
      .catch((error: AxiosError) => {
        if(error.status === 401) {
          setError(error)
        }
      })
    },
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
        <Heading color={"teal.400"}>Bem-vindo(a)</Heading>
        <form action="POST" onSubmit={formik.handleSubmit}>
          <Box p={"1rem"}>
            <InputField 
              type="email"
              placeholder="exemplo@exemplo.com"
              name="email"
              label="E-mail:"
              formik={formik}
            />
            <InputField
              type="password"
              placeholder="Password"
              name="password"
              label="Senha:"
              formik={formik}
            />
            { error != null && (
              <div>
              <p>É FODA DEU ERRO</p>
            </div>
            )}
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