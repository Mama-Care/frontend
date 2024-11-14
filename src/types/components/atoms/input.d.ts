export interface IInputProps {
    type?: 'text' | 'password' | 'email' | 'number';
    placeholder?: string;
    className?: string;
    children?: ReactNode;
  }