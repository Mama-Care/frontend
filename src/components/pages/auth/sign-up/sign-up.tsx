import Flex from "@src/components/atoms/flex/flex";
import Typography from "@src/components/atoms/typography/typography";
import Header from "@src/components/organisms/header/header";
import Button from "@src/components/atoms/button/button";
import Input from "@src/components/atoms/input/input";

const SignUp = () => {
  return (
    <Flex as="main" className="flex max-w-min w-full h-screen flex-col bg-primary-main">
      <Header showButtons={false} />

      <Flex as="section" className="flex items-center justify-center flex-grow">
        <Flex as="article" className="bg-box-primary p-12 rounded-lg w-full max-w-md">
          <Flex as="section" className="flex flex-col gap-4 w-full">
            <Typography as="h1" className="text-3xl font-bold text-left mb-6" weight="medium">
              Crie sua conta
            </Typography>
            <Input type="text" placeholder="Username" />
            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />
            <Input type="password" placeholder="Confirme sua senha" />

            <Flex as="section" className="flex items-center">
              <input
                type="checkbox"
                placeholder="Confirme sua senha"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                Aceito os termos e condições
              </label>
            </Flex>
            <Button
              className="mt-3 bg-secondary-main px-4 py-2 rounded-md hover:bg-opacity-90"
              onClick={() => {}}
            >
              <Typography className="text-[#FFF]" as="span" weight="regular">
                Registre-se
              </Typography>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUp;