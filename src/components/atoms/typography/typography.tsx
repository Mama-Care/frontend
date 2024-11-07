import { ITypographyProps } from "@src/types/components/atoms/typography";
import { twMerge } from "tailwind-merge";

const Typography = ({ as, children, className, weight }: ITypographyProps) => {

  const weigths = {
    light: 'font-light',
    regular: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  }

  const Tag = as;

  return (
    <Tag className={twMerge('text-base text-primary-text', weigths[weight], className)}>
      {children}
    </Tag>
  );
};

export default Typography;