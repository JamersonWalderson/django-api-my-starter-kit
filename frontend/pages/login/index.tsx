import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import InputField from "../../components/InputField";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values)
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
      >
        <Heading color={"teal.400"}>Bem-vindo(a)</Heading>
        <form>
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