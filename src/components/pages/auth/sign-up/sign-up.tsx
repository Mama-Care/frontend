import Flex from "@src/components/atoms/flex/flex";
import Typography from "@src/components/atoms/typography/typography";
import Header from "@src/components/organisms/header/header";
import Button from "@src/components/atoms/button/button";
import Input from "@src/components/atoms/input/input";

import { ISignup } from "@src/types/components/pages/signup";
import useFormHook from "@src/hooks/use-form/use-form";
import { FormEvent, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthApi } from "@src/repositories/auth/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const initialValues: ISignup = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [ form, onChange ] = useFormHook(initialValues);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (validFields()) {
      AuthApi.register(form);
      toast.success("Cadastro realizado com sucesso!");

      navigate('/home')
    }
  };

  const validFields = () => {
    const { username, email, password, confirmPassword } = form;

    if (!username || !email || !password || !confirmPassword) {
      toast.warning('Todos os campos são obrigatórios');
      return false;
    }

    if (password.length < 6) {
      toast.warning('A senha precisa ter pelo menos 6 caracteres');
      return false;
    }
    
    if (password !== confirmPassword) {
      toast.warning('As senhas não conferem');
      return false;
    }

    return true;
  }

  return (
    <Flex as="main" className="flex w-full h-screen flex-col bg-primary-main">
      <Header rightContent={false} showButtons={false} />

      <Flex as="section" className="flex items-center justify-center flex-grow">
        <Flex as="article" className="bg-box-primary p-12 rounded-lg w-full max-w-md">
          <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-full'>
            <Typography as="h1" className="text-3xl font-bold text-left mb-6" weight="medium">
              Crie sua conta
            </Typography>
            <Input
              type="text" 
              placeholder="Username" 
              className="px-4 py-2 rounded-md border border-neutral-400 focus:outline-none"
              value={form?.username}
              onChange={(value: string) => onChange('username', value)}
            />
            
            <Input 
              type="email" 
              placeholder="E-mail" 
              className="px-4 py-2 rounded-md border border-neutral-400 focus:outline-none"
              value={form?.email}
              onChange={(value: string) => onChange('email', value)}
            />
            <Input 
              type="password" 
              placeholder="Senha" 
              className="px-4 py-2 rounded-md border border-neutral-400 focus:outline-none"
              value={form?.password}
              onChange={(value: string) => onChange('password', value)}
            />
            <Input 
              type="password" 
              placeholder="Confirme sua senha" 
              className="px-4 py-2 rounded-md border border-neutral-400 focus:outline-none"
              value={form?.confirmPassword}
              onChange={(value: string) => onChange('confirmPassword', value)}
            />

            <Flex as="section" className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-primary-text border-secondary-main rounded focus:ring-secondary-main"
              />
              <label htmlFor="terms" className="ml-2 text-base text-primary-text">
                Aceito os <span className="text-secondary-main hover:underline text-center cursor-pointer">termos e condições</span>
              </label>
            </Flex>
            <Button
              type='submit'
              className="mt-3 bg-secondary-main px-4 py-2 rounded-md hover:bg-opacity-90"
            >
              <Typography className="text-[#FFF]" as="span" weight="regular">
                Registre-se
              </Typography>
            </Button>
            <Flex as="section" className="flex items-center mt-1 mb-0">
              <hr className="flex-grow border-gray-300" />
              <Typography as="p" className="mx-2 text-gray-500 text-sm" weight="regular">
                Ou continue com
              </Typography>
              <hr className="flex-grow border-gray-300" />
            </Flex>
            <Flex as="section" className="flex justify-center gap-4 mt-1">
              <Button
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
                <img src="/assets/images/sign-in/google-logo.png" alt="Google" className="w-5 h-5 mr-2" />
                Google
              </Button>
              <Button
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
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

export default SignUp;