import { IButtonProps } from "@src/types/components/atoms/button";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className, onClick }: IButtonProps) => {
  return (
    <button className={twMerge('', className)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;