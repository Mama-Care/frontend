import Button from "@src/components/atoms/button/button";
import Flex from "@src/components/atoms/flex/flex";
import CloseMenuIcon from "@src/components/atoms/icons/close-menu";
import PlusIcon from "@src/components/atoms/icons/plus";
import Typography from "@src/components/atoms/typography/typography";

const Sidebar = () => {
  return (
    <Flex as='section' className='w-[16rem] flex-col h-full bg-[#fff] p-4 gap-8'>
      <Button onClick={() => {}} className='flex items-center cursor-pointer w-full gap-4'>
        <CloseMenuIcon />
        <Typography as='span' weight='regular' className='text-md'>
          Fechar menu
        </Typography>
      </Button>
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
  );
}

export default Sidebar;