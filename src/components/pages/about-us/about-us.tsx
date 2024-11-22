import Flex from "@src/components/atoms/flex/flex";
import Typography from "@src/components/atoms/typography/typography";
import Header from "@src/components/organisms/header/header";
import AboutUsImage from "@public/assets/images/about-us/breastfeeding.png";

const AboutUs = () => {
  return (
    <Flex as="main" className="flex w-full h-screen flex-col bg-primary-main overflow-hidden">
      <Header showButtons={false} rightContent={false} />

      <Flex as="section" className="flex flex-grow items-center justify-center overflow-hidden">
        <Flex as="section" className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl px-6">

          <Flex as='article' className='flex justify-center lg:w-1/2 p-4'>
            <img style={{ width: '100%', maxWidth: '100%', height: 'auto' }} src={AboutUsImage} alt='Mãe amamentando'/>
          </Flex>

          <Flex as="article" className="flex flex-col lg:w-1/2 p-8 space-y-6">
            <Typography
              as="h2"
              className="text-[1em] xl:text-[1.5em] leading-[1.5] text-primary-contrast"
              weight="bold"
            >
              Se você chegou até aqui, parabéns por buscar mais informações sobre amamentação!
            </Typography>
            <Typography as="p" className="text-[1em] xl:text-[1.25em] text-primary-contrast text-justify" weight="medium">
              O <span className="text-secondary-main font-bold">Mama Care</span> foi criado para
              oferecer suporte e esclarecer dúvidas comuns sobre esse momento tão especial entre mãe e bebê.
            </Typography>
            <Typography as="p" className="text-[1em] xl:text-[1.25em] text-primary-contrast text-justify" weight="medium">
              Nosso chatbot está preparado para responder a perguntas sobre amamentação com base em fontes confiáveis e atualizadas. Ele pode te orientar sobre:{" "}
              <span className="font-bold">Técnicas de amamentação, desafios comuns, cuidados com a saúde da mãe e do bebê e dúvidas frequentes</span>
            </Typography>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutUs;
