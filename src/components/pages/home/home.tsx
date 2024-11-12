import Button from "@src/components/atoms/button/button";
import Flex from "@src/components/atoms/flex/flex";
import CloseMenuIcon from "@src/components/atoms/icons/close-menu";
import PlusIcon from "@src/components/atoms/icons/plus";
import SendMessageIcon from "@src/components/atoms/icons/send-message";
import Typography from "@src/components/atoms/typography/typography";
import Header from "@src/components/organisms/header/header";

const Home = () => {

  return (
    <Flex as='main' className='flex w-full h-screen'>
      <Flex as='section' className='w-[16rem] flex-col h-full bg-[#fff] p-4 gap-8'>
        <Flex as='article' className='flex items-center w-full gap-4'>
          <CloseMenuIcon />
          <Typography as='span' weight='regular' className='text-md'>
            Fechar menu
          </Typography>
        </Flex>
        <Flex as='article' className='items-center justify-center'>
          <Button className='bg-secondary-main w-[11rem] h-[2.25rem] rounded-md flex items-center justify-around p-4' onClick={() => {}}>
            <PlusIcon />
            <Typography as='span' weight='regular' className='text-[#FFF]'>
              Novo chat
            </Typography>
          </Button>
        </Flex>
        <Flex as='article'>
          <Typography as='span' weight='medium'>
            Histórico de conversas
          </Typography>
        </Flex>
      </Flex>
      <Flex as='section' className='flex flex-col w-full bg-primary-main'>
        <Header rightContent showButtons={false} className='flex items-end justify-end w-full' />
        <Flex as='section' className='flex flex-col px-32 py-28 gap-32'>
          <Typography as='h1' weight='bold' className='text-[2.5rem]'>
            Olá! Sou seu assistente de amamentação!<br />
            Como posso te ajudar?
          </Typography>
          {/* TODO: Trocar pelo input */}
          <Flex as='article' className='bg-[#fff] w-[50rem] rounded-md p-4 flex justify-between'>
            <Typography as='span' weight='regular' >
              Escreva uma mensagem...
            </Typography>
            <Flex as='article' className='flex items-center'>
              <Button className='cursor-pointer' onClick={() => {}}>
                <SendMessageIcon />
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;