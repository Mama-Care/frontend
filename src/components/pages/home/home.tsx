import Button from "@src/components/atoms/button/button";
import Flex from "@src/components/atoms/flex/flex";
import SendMessageIcon from "@src/components/atoms/icons/send-message";
import Input from "@src/components/atoms/input/input";
import Typography from "@src/components/atoms/typography/typography";
import Header from "@src/components/organisms/header/header";
import Sidebar from "@src/components/organisms/sidebar/sidebar";

const Home = () => {
  return (
    <Flex as='main' className='flex w-full h-screen'>
      <Sidebar />
      <Flex as='section' className='flex flex-col w-full bg-primary-main'>
        <Header rightContent showButtons={false} className='flex items-end justify-end w-full' />
        <Flex as='section' className='flex flex-col px-32 py-28 gap-32'>
          <Typography as='h1' weight='bold' className='text-[2.5rem]'>
            Olá! Sou seu assistente de amamentação!<br />
            Como posso te ajudar?
          </Typography>
          <Flex as='article'>
            <Input 
              type='text' 
              placeholder='Escreva uma mensagem...' 
              className='bg-[#fff] w-[50rem] rounded-md p-4 flex justify-between'
              children={
                <Button className='cursor-pointer' onClick={() => {}}>
                  <SendMessageIcon />
                </Button>
              }
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;