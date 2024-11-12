import Flex from "@src/components/atoms/flex/flex";
import Typography from "@src/components/atoms/typography/typography";
import Header from "@src/components/organisms/header/header";
import Button from "@src/components/atoms/button/button";
import Input from "@src/components/atoms/input/input";

const ForgotPassword = () => {
  return (
    <Flex as="main" className="flex max-w-min w-full h-screen flex-col bg-primary-main">
      <Header showButtons={false} />

      <Flex as="section" className="flex items-center justify-center flex-grow">
        <Flex as="article" className="bg-box-primary p-12 rounded-lg w-full max-w-md">
          <Flex as="section" className="flex flex-col gap-3 w-full">
            <Typography as="h1" className="text-3xl font-bold text-left mb-6" weight="medium">
              Esqueceu sua senha?
            </Typography>
            <Input type="email" placeholder="E-mail" className="px-4 py-2 border border-border-color rounded-md focus:outline-none" />
            <Button
              className="mt-3 bg-secondary-main px-4 py-2 rounded-md hover:bg-opacity-90"
              onClick={() => {}}
            >
              <Typography className="text-[#FFF]" as="span" weight="regular">
                Enviar Código
              </Typography>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ForgotPassword;