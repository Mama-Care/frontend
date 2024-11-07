export interface ITypographyProps {
  as: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  children: ReactNode;
  className?: string;
  weight: 'bold' | 'light' | 'regular' | 'medium';
}