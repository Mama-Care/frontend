export interface IInputProps {
    type?: 'text' | 'password' | 'email' | 'number';
    placeholder?: string;
    className?: string;
    children?: ReactNode;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    value?: string | number;
  }