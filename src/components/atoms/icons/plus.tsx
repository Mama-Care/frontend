import { IPlusIconProps } from "@src/types/components/atoms/icons/plus";

const PlusIcon = (props: IPlusIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 .5v13M.5 6.96h13"
    />
  </svg>
)
export default PlusIcon;
