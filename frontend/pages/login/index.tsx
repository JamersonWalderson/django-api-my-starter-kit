import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";

export default function Login() {
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
            <FormControl>
              <FormLabel>E-mail:</FormLabel>
              <Input type="email" placeholder="test@test.com" />
            </FormControl>
            <FormControl>
              <FormLabel>Senha:</FormLabel>
              <Input type="password" placeholder="Password" />
            </FormControl>
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