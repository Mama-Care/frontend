import Button from "@src/components/atoms/button/button";
import Flex from "@src/components/atoms/flex/flex";
import LogoIcon from "@src/components/atoms/icons/logo";
import Typography from "@src/components/atoms/typography/typography";
import RenderCondition from "@src/components/no-visual/render-condition";
import { IHeaderProps } from "@src/types/components/organisms/header";
import { twMerge } from "tailwind-merge";

const Header = ({ showButtons, className, rightContent }: IHeaderProps) => {
  return (
    <header className='flex p-7 bg-primary-main'>
      <nav className='w-full'>
        <Flex as='article' className='flex w-full justify-between'>
          <Flex as='article' className={twMerge('flex w-2/3 sm:gap-4 lg:gap-14 items-end', className)}>
            <RenderCondition condition={!rightContent}>
              <LogoIcon />
            </RenderCondition>
            <Typography 
              className='text-[1.25rem] cursor-pointer hover:bg-secondary-main hover:text-[#fff] hover:px-2 transition-all duration-300 ease-in-out rounded-md' 
              as='span' 
              weight='regular'
            >
              Sobre nós
            </Typography>
            <Typography 
              className='text-[1.25rem] cursor-pointer hover:bg-secondary-main hover:text-[#fff] hover:px-2 transition-all duration-300 ease-in-out rounded-md' 
              as='span' 
              weight='regular'
            >
              Como usar?
            </Typography>
            <RenderCondition condition={rightContent}>
              <LogoIcon />
            </RenderCondition>
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