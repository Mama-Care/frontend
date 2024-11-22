import Flex from "@src/components/atoms/flex/flex";
import Typography from "@src/components/atoms/typography/typography";
import Header from "@src/components/organisms/header/header";
import AboutUsImage from "@public/assets/images/how-to-use/motherhood.png";
import Button from "@src/components/atoms/button/button";

const HowTo = () => {
  return (
<Flex as="main" className="flex w-full h-screen flex-col bg-primary-main overflow-y-auto lg:overflow-hidden">
  <Header showButtons={false} rightContent={false} />

  <Flex as="section" className="flex flex-grow items-center justify-center overflow-y-auto lg:overflow-auto">
    <Flex 
      as="section" 
      className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl px-6 space-y-6 lg:space-y-0"
    >
      <Flex as="article" className="flex flex-col lg:w-1/2 p-6 space-y-4">
        <Typography 
          as="h1" 
          className="text-secondary-main text-[3em] xl:text-[4em] leading-tight font-medium"
          weight="bold"
        >
          Como usar?
        </Typography>
        <Typography 
          as="p" 
          className="text-primary-contrast text-[1.125em] xl:text-[1.25em] leading-relaxed text-justify"
          weight="regular"
        >
          Para fazer sua pergunta, basta digitar na caixa de chat ao final da página. O 
          <span className="text-secondary-main font-bold"> Mama Care </span>
          vai usar as informações que você fornecer para tentar responder de forma clara e precisa, sempre dentro do contexto de amamentação.
        </Typography>
        <Typography 
          as="p" 
          className="text-primary-contrast text-[1.125em] xl:text-[1.25em] leading-relaxed text-justify"
          weight="bold"
        >
          Algumas dicas para obter a melhor resposta:
        </Typography>
        <ul className="list-disc pl-6 text-primary-contrast text-[1em] xl:text-[1.125em] leading-relaxed space-y-0 text-justify">
          <li>
            Seja <span className="font-medium"> específica </span> nas perguntas, assim podemos te ajudar de maneira mais assertiva.
          </li>
          <li>
            O Mama Care foi treinado para responder apenas sobre <span className="font-medium">amamentação</span>, então perguntas fora desse tema serão gentilmente respondidas com uma sugestão de foco.
          </li>
          <li>
            Lembre-se de que, apesar do nosso assistente ser muito útil, ele <span className="font-medium">não</span> substitui a consulta com <span className="font-medium">profissionais de saúde.</span>
          </li>
        </ul>
        <Typography 
          as="p" 
          className="text-primary-contrast text-[1.125em] xl:text-[1.25em] text-justify"
          weight="bold"
        >
          Estamos aqui para apoiar você nessa jornada tão importante!
        </Typography>
        <Button 
          className="mt-7 bg-secondary-main w-[15.375rem] h-[3.625rem] rounded-md" 
          onClick={() => {}}
        >
          <Typography 
            className="text-[#FFF] text-2xl" 
            as="span" 
            weight="regular"
          >
            Comece agora
          </Typography>
        </Button>
      </Flex>
      <Flex as="article" className="flex justify-center lg:w-2/2 p-6">
        <img 
          style={{ width: '100%', maxWidth: '500px', height: 'auto' }} 
          src={AboutUsImage} 
          alt="Mãe amamentando" 
        />
      </Flex>
    </Flex>
  </Flex>
</Flex>
  );
};

export default HowTo;
