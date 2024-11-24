import { IInputProps } from "@src/types/components/atoms/input";
import { twMerge } from "tailwind-merge";
import Flex from "@src/components/atoms/flex/flex";
import React, { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement, IInputProps>(({
  type = 'text',
  placeholder,
  className,
  children,
  onChange,
  value,
  onKeyDown,
}, ref) => {
  return (
    <Flex as="article" className={twMerge('', className)}>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className="focus:outline-none w-full"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {children}
    </Flex>
  );
});

Input.displayName = 'Input';

export default Input;
