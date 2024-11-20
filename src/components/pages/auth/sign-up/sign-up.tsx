import Flex from "@src/components/atoms/flex/flex";
import Typography from "@src/components/atoms/typography/typography";
import Header from "@src/components/organisms/header/header";
import Button from "@src/components/atoms/button/button";
import Input from "@src/components/atoms/input/input";

const SignUp = () => {
  return (
    <Flex as="main" className="flex w-full h-screen flex-col bg-primary-main">
      <Header showButtons={false} rightContent={false} />

      <Flex as="section" className="flex items-center justify-center flex-grow">
        <Flex as="article" className="bg-box-primary p-12 rounded-lg w-full max-w-md">
          <Flex as="section" className="flex flex-col gap-3 w-full">
            <Typography as="h1" className="text-3xl font-bold text-left mb-6" weight="medium">
              Crie sua conta
            </Typography>
            <Input type="text" placeholder="Username" className="px-4 py-2 border border-border-color rounded-md focus:outline-none"/>
            <Input type="email" placeholder="E-mail" className="px-4 py-2 border border-border-color rounded-md focus:outline-none" />
            <Input type="password" placeholder="Senha" className="px-4 py-2 border border-border-color rounded-md focus:outline-none"/>
            <Input type="password" placeholder="Confirme sua senha" className="px-4 py-2 border border-border-color rounded-md focus:outline-none"/>

            <Flex as="section" className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-primary-text border border-secondary-main rounded-md focus:ring-secondary-main"
              />
              <label htmlFor="terms" className="ml-2 text-base text-primary-text">
                Aceito os <span className="text-secondary-main hover:underline text-center cursor-pointer">termos e condições</span>
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
            <Flex as="section" className="flex items-center mt-1 mb-0">
              <hr className="flex-grow border-gray-300" />
              <Typography as="p" className="mx-2 text-gray-500 text-sm border-border-color" weight="regular">
                Ou continue com
              </Typography>
              <hr className="flex-grow border-gray-300" />
            </Flex>
            <Flex as="section" className="flex justify-center gap-4 mt-1">
              <Button
                onClick={() => {}}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
                <img src="/assets/images/sign-in/google-logo.png" alt="Google" className="w-5 h-5 mr-2" />
                Google
              </Button>
              <Button
                onClick={() => {}}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
                <img src="/assets/images/sign-in/facebook-logo.png" alt="Facebook" className="w-5 h-5 mr-2" />
                Facebook
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUp;