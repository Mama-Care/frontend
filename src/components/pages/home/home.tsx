import Button from "@src/components/atoms/button/button";
import Flex from "@src/components/atoms/flex/flex";
import SendMessageIcon from "@src/components/atoms/icons/send-message";
import Input from "@src/components/atoms/input/input";
import Typography from "@src/components/atoms/typography/typography";
import RenderCondition from "@src/components/no-visual/render-condition";
import Header from "@src/components/organisms/header/header";
import Sidebar from "@src/components/organisms/sidebar/sidebar";
import { useAuth } from "@src/hooks/use-auth/use-auth";
import { useChat } from "@src/hooks/use-chat/use-chat";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IChatHistory {
  sender: string | undefined;
  text: string | undefined;
};

const Home = () => {
  const [chatHistory, setChatHistory] = useState<IChatHistory[]>([]);
  const { 
    createQuestion, 
    questionValue, 
    setQuestionValue, 
    isLoading,
    getHistoryChat
  } = useChat();

  const { userId } = useAuth();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && questionValue !== '') {
      handleSendQuestion();
    }
  };

  const handleSendQuestion = () => {
    if (questionValue.trim() === "") return;

    const newUserMessage = { sender: "user", text: questionValue };
    setChatHistory((prev) => [...prev, newUserMessage]);
    setQuestionValue("");

    createQuestion(userId, questionValue, (response: string) => {
      const newBotMessage = { sender: "bot", text: response };
      setChatHistory((prev) => [...prev, newBotMessage]);
    });
  };


  useEffect(() => {
    if (userId) {
      getHistoryChat(userId, (content: any[]) => {
        const contentArray = Object.values(content);

        contentArray.map((item) => {
          if (item?.pergunta) {
            setChatHistory((prev) => [...prev, { sender: "user", text: item.pergunta as string }]);
          }

          if (item?.resposta) {
            setChatHistory((prev) => [...prev, { sender: "bot", text: item.resposta as string }]);
          }
        });
  
      });
    }
  }, [userId]);

  

  return (
    <Flex as='main' className='flex w-full h-screen'>
      <Sidebar />
      <Flex as='section' className='flex flex-col w-full h-full bg-primary-main justify-between'>
        <Header rightContent showButtons={false} className='flex items-end justify-end w-full' />
        <RenderCondition condition={chatHistory.length === 0}>
          <Flex as='article' className='px-44'>
            <Typography as='h1' weight='bold' className='text-start text-[2.5rem]'>
              Olá! Sou seu assistente de amamentação!<br />
              Como posso te ajudar?
            </Typography>
          </Flex>
        </RenderCondition>

        <RenderCondition condition={chatHistory.length > 0}>
          <Flex as='article' className='flex w-[60rem] self-center'>
            <Flex as='article' className='flex flex-col w-full items-start justify-start h-[50rem] overflow-y-scroll'>
              <RenderCondition condition={isLoading}>
                <PulseLoader />
              </RenderCondition>
              {chatHistory.map((message, index) => (
              <Flex
                as='article'
                key={index}
                className={`p-4 m-2 max-w-[90%] rounded-lg ${
                  message?.sender === "user"
                    ? "bg-[#FAFAFA] self-end"
                    : "bg-[#FAFAFA] self-start"
                }`}
              >
                {/* Renderizando Markdown */}
                <div className="prose prose-sm text-[#3A3A3A]">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.text || ""}</ReactMarkdown>
                </div>
              </Flex>
            ))}
            </Flex>
          </Flex>
        </RenderCondition>

        <Flex as='section' className='flex flex-col items-center justify-end mb-2 h-full px-32'>
          <Input 
            type='text' 
            placeholder='Escreva uma mensagem...' 
            className='bg-[#fff] w-[50rem] rounded-md p-4 flex justify-between'
            value={questionValue}
            onChange={(e) =>
              setQuestionValue(e.target.value)
            }
            onKeyDown={(e) => handleKeyPress(e)}
            children={
              <Button className='cursor-pointer' onClick={handleSendQuestion}>
                <SendMessageIcon />
              </Button>
            }
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
