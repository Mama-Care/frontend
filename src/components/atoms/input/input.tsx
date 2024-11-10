import { InputProps } from "@src/types/components/atoms/input";

const Input = ({ type = 'text', placeholder, className }: InputProps) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`px-4 py-2 rounded-md border border-neutral-400 focus:outline-none ${className}`}
      />
    );
  };
  
  export default Input;