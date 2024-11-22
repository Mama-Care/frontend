export interface IButtonProps {
  children: ReactNode;
  onClick?: (event?: React.FormEvent) => void;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
}