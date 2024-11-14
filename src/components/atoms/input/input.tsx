import { IInputProps } from "@src/types/components/atoms/input";
import { twMerge } from "tailwind-merge";
import Flex from "@src/components/atoms/flex/flex";

const Input = ({ 
  type = 'text', 
  placeholder, 
  className, 
  children 
}: IInputProps) => {
    return (
      <Flex as='article' className={twMerge('', className)}>
        <input
          type={type}
          placeholder={placeholder}
          className='focus:outline-none w-full'
        />
        {children}
      </Flex>
    );
  };
  
  export default Input;