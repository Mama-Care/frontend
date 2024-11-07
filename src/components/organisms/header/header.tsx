import Button from "@src/components/atoms/button/button";
import Flex from "@src/components/atoms/flex/flex";
import LogoIcon from "@src/components/atoms/icons/logo";
import Typography from "@src/components/atoms/typography/typography";
import RenderCondition from "@src/components/no-visual/render-condition";
import { IHeaderProps } from "@src/types/components/organisms/header";

const Header = ({ showButtons }: IHeaderProps) => {
  return (
    <header className='flex w-screen p-7'>
      <nav className='w-full'>
        <Flex as='article' className='flex w-full justify-between'>
          <Flex as='article' className='flex w-2/3 sm:gap-4 lg:gap-14'>
            <LogoIcon />
            <Typography className='text-[1.25rem]' as='span' weight='regular'>
              Sobre nós
            </Typography>
            <Typography className='text-[1.25rem]' as='span' weight='regular'>
              Como usar?
            </Typography>
          </Flex>
          <RenderCondition condition={showButtons}>
            <article className='flex justify-around gap-3'>
              <Button 
                className='bg-[#FCFCFC] rounded-md w-[5.688rem] h-[3.25rem] hover:bg-[#FCFCFC]-600' 
                onClick={() => {}}
              >
                <Typography as='span' weight='regular'>
                  Login
                </Typography>
              </Button>

              <Button 
                className='bg-secondary-main rounded-md w-[7rem] h-[3.25rem] hover:bg-secondary-main-600' 
                onClick={() => {}}
              >
                <Typography className='text-[#FFF]' as='span' weight='regular'>
                  Registre-se
                </Typography>
              </Button>
            </article>
          </RenderCondition>
        </Flex>
      </nav>
    </header>
  );
}

export default Header;