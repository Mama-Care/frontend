import { InputProps } from "@src/types/components/atoms/input";
import { twMerge } from "tailwind-merge";

const Input = ({ type = 'text', placeholder, className }: InputProps) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={twMerge('', className)}
      />
    );
  };
  
  export default Input;