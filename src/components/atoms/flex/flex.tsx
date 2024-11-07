import { IFlexProps } from "@src/types/components/atoms/flex";
import { twMerge } from "tailwind-merge";

const Flex = ({ className, children, as }: IFlexProps) => {
  const Tag = as;

  return (
    <Tag className={twMerge('flex', className)}>
      {children}
    </Tag>
  );
};

export default Flex;