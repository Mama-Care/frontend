import Button from "@src/components/atoms/button/button";
import Flex from "@src/components/atoms/flex/flex";
import SendMessageIcon from "@src/components/atoms/icons/send-message";
import Input from "@src/components/atoms/input/input";
import Typography from "@src/components/atoms/typography/typography";
import RenderCondition from "@src/components/no-visual/render-condition";
import Header from "@src/components/organisms/header/header";
import Sidebar from "@src/components/organisms/sidebar/sidebar";
import { useChat } from "@src/hooks/use-chat/use-chat";
import { useState } from "react";

const Home = () => {
  const [chatHistory, setChatHistory] = useState<{ 
    sender: string; 
    text: string;
  }[]>([]);
  const { createQuestion, questionValue, setQuestionValue } = useChat();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && questionValue !== '') {
      handleSendQuestion();
    }
  };

  const handleSendQuestion = () => {
    if (questionValue.trim() === '') return;

    setChatHistory((prev) => [
      ...prev, { 
        sender: 'user', 
        text: questionValue 
      }
    ]);

    setQuestionValue('');

    createQuestion(questionValue, (response: string) => {
      setChatHistory((prev) => [
        ...prev, { 
          sender: 'bot',
          text: response 
        }
      ]);
    });
  };

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
          <Flex as='article' className='flex w-[50rem] self-center'>
            <Flex as='article' className='flex flex-col w-full items-start justify-start h-[25rem] overflow-y-scroll'>
              {chatHistory.map((message, index) => (
                <Flex
                  as='article'
                  key={index}
                  className={`p-4 m-2 max-w-[30%] rounded-lg ${
                    message.sender === "user"
                      ? "bg-[#9AA5A6] self-end"
                      : "bg-secondary-main self-start"
                  }`}
                >
                  <Typography as='span' weight='regular' className='text-[#fff]'>
                    {message.text}
                  </Typography>
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