import Flex from "@src/components/atoms/flex/flex";
import Typography from "@src/components/atoms/typography/typography";
import Header from "@src/components/organisms/header/header";
import Button from "@src/components/atoms/button/button";
import Input from "@src/components/atoms/input/input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@src/hooks/use-auth/use-auth";
import { IUser } from "@src/types/components/pages/signin";
import useFormHook from "@src/hooks/use-form/use-form";
import { toast } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const initialValues: IUser = {
    email: '',
    password: '',
  };

  const [ form, onChange ] = useFormHook(initialValues);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validFields()) {
      login(form, () => {
        toast.success('Sucesso!');
        navigate('/home');
      });
    }
  }

  const validFields = () => {
    const { email, password } = form;

    if (!email || !password ) {
      toast.warning('Todos os campos são obrigatórios');
      return false;
    }

    return true;
  }

  
  return (
    <Flex as="main" className="flex w-full h-screen flex-col bg-primary-main">
      <Header rightContent={false} showButtons={false} />

      <Flex as="section" className="flex items-center justify-center flex-grow">
        <Flex as="article" className="bg-box-primary p-12 rounded-lg w-full max-w-md justify-center">
          <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
            <Typography as="h1" className="text-3xl font-bold text-left mb-6" weight="medium">
              Login
            </Typography>
            <Input
              type="email"
              placeholder="example@email.com"
              className="px-4 py-2 rounded-md border border-gray-200 focus:outline-none"
              value={form?.email}
              onChange={(e) => onChange('email', e.target.value)}
            />
            <Input
              type="password"
              placeholder="*************"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
              value={form?.password}
              onChange={(e) => onChange('password', e.target.value)}
            />
            <Typography
              as="p"
              className="text-sm font-medium hover:underline text-center cursor-pointer"
              weight="medium"
            >
              Esqueceu sua senha?
            </Typography>
            <Button
              type='submit'
              className='mt-3 bg-secondary-main px-4 py-2 rounded-md hover:bg-opacity-90' 
            >
              <Typography 
                className='text-[#FFF]' 
                as='span' 
                weight='regular'
              >
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
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md"
              >
                <img src="/assets/images/sign-in/google-logo.png" alt="Google" className="w-5 h-5 mr-2" />
                Google
              </Button>
              <Button
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md"
              >
                <img src="/assets/images/sign-in/facebook-logo.png" alt="Facebook" className="w-5 h-5 mr-2" />
                Facebook
              </Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignIn;
