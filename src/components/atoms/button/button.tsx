import { IButtonProps } from "@src/types/components/atoms/button";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className, type = 'button', onClick }: IButtonProps) => {
  return (
    <button type={type} className={twMerge('', className)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;