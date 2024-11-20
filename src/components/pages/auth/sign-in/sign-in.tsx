import Flex from "@src/components/atoms/flex/flex";
import Typography from "@src/components/atoms/typography/typography";
import Header from "@src/components/organisms/header/header";
import Button from "@src/components/atoms/button/button";

const SignIn = () => {
  return (
    <Flex as="main" className="flex w-full h-screen flex-col bg-primary-main">
      <Header showButtons={false} rightContent={false} />
      <Flex as="section" className="flex items-center justify-center flex-grow">
        <Flex as="article" className="bg-box-primary p-12 rounded-lg w-full max-w-md justify-center">
          <Flex as="section" className="flex flex-col gap-2 w-full">
            <Typography as="h1" className="text-3xl font-bold text-left mb" weight="medium">
              Login
            </Typography>
            <input
              type="email"
              placeholder="E-mail"
              className="px-4 py-2 border border-border-color rounded-md focus:outline-none" />
            <input
              type="password"
              placeholder="Senha"
              className="px-4 py-2 border border-border-color rounded-md focus:outline-none"
            />
            <Typography
              as="p"
              className="text-sm font-medium hover:underline text-center cursor-pointer"
              weight="medium"
            >
              Esqueceu sua senha?
            </Typography>
            <Button className='mt-3 bg-secondary-main px-4 py-2 rounded-md hover:bg-opacity-90' onClick={() => {}}>
                <Typography className='text-[#FFF]' as='span' weight='regular'>
                    Login
                </Typography>
            </Button>
            <Typography as="p" className="text-center text-gray-500 mt-3" weight="regular">
              Não tem uma conta?
              <span className="text-blue-500 hover:underline cursor-pointer">Registre-se aqui</span>
            </Typography>

            <Flex as="section" className="flex items-center mt-4">
              <hr className="flex-grow border-gray-300" />
              <Typography as="p" className="mx-2 text-gray-500 text-sm" weight="regular">
                Ou continue com
              </Typography>
              <hr className="flex-grow border-gray-300" />
            </Flex>

            <Flex as="section" className="flex justify-center gap-4 mt-6">
              <Button
                onClick={() => {}}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md"
              >
                <img src="/assets/images/sign-in/google-logo.png" alt="Google" className="w-5 h-5 mr-2" />
                Google
              </Button>
              <Button
                onClick={() => {}}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md"
              >
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

export default SignIn;
