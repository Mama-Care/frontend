import Flex from '@src/components/atoms/flex/flex';
import Header from '@src/components/organisms/header/header';
import LandingLogo from '@public/assets/images/landing/landing-logo.png'
import Typography from '@src/components/atoms/typography/typography';
import Button from '@src/components/atoms/button/button';
import useMediaQuery from '@src/hooks/use-media-query/use-media-query';
import RenderCondition from '@src/components/no-visual/render-condition';

const LandingPage = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
   
  return (
    <>
      <Header showButtons rightContent={false} />
      <Flex as='main' className='flex w-full h-screen flex-col bg-primary-main'>
        <Flex as='section' className='w-full'>
          <Flex as='article' className='w-full flex flex-col p-4'>
            <RenderCondition condition={isDesktop}>
              <Flex as='section' className='flex w-full'>
                <Flex as='article' className='p-10 w-2/3 flex flex-col'>
                  <Typography 
                    as='h1' 
                    className='text-secondary-main text-[4em] xl:text-[4.5em] leading-[60px]' 
                    weight='medium'
                  >
                    Mama Care
                  </Typography>
                  <Typography 
                    as='h2' 
                    className='text-[4em] xl:text-[4.5em] leading-[60px]' 
                    weight='medium'
                  >
                    Seu maior aliado na jornada da amamentação
                  </Typography>
                  <Flex as='article' className='flex flex-col gap-3'>
                    <Typography as='p' className='mt-8 text-xl xl:text-2xl' weight='regular'>
                      Tire todas as suas dúvidas sobre amamentação de forma rápida e fácil.<br /> 
                      Nosso chat inteligente te oferece informações confiáveis sempre que <br />você precisar.
                    </Typography>

                    <Button className='mt-6 bg-secondary-main w-[15.375rem] h-[3.625rem] rounded-md' onClick={() => {}}>
                      <Typography className='text-[#FFF] text-2xl' as='span' weight='regular'>
                        Comece agora
                      </Typography>
                    </Button>
                  </Flex>
                </Flex>

                <Flex as='article' className='flex p-4'>
                  <img style={{ width: '100%', maxWidth: '400px', height: 'auto' }} src={LandingLogo} alt='mãe amamentando'/>
                </Flex>
              </Flex>
            </RenderCondition>
            <RenderCondition condition={!isDesktop}>
              <Flex as='article' className='flex flex-col p-16 items-start'>
                <Typography as='h1' className='text-secondary-main text-[3em] leading-[60px]' weight='medium'>
                  Mama Care
                </Typography>
                <Typography as='h1' className='text-[3em] leading-[60px]' weight='medium'>
                  Seu maior aliado na jornada da amamentação
                </Typography>
                <img style={{ width: '100%', maxWidth: '350px', height: 'auto' }} src={LandingLogo} alt='mãe amamentando'/>
                <Flex as='article' className='flex flex-col gap-3'>
                  <Typography as='p' className='text-2xl' weight='regular'>
                    Tire todas as suas dúvidas sobre amamentação de forma rápida e fácil. 
                    Nosso chat inteligente te oferece informações confiáveis sempre que você precisar.
                  </Typography>

                  <Button className=' bg-secondary-main w-[15.375rem] h-[3.625rem] rounded-md' onClick={() => {}}>
                    <Typography className='text-[#FFF] text-2xl' as='span' weight='regular'>
                      Comece agora
                    </Typography>
                  </Button>
                </Flex>
              </Flex>
            </RenderCondition>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default LandingPage;