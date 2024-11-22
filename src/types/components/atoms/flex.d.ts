export interface IFlexProps {
  className?: string;
  children?: React.ReactNode;
  as: 'section' | 'article' | 'main' | 'form';
}