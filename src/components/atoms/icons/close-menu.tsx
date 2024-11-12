import { ICloseMenuIconProps } from "@src/types/components/atoms/icons/close-menu";

const CloseMenuIcon = (props: ICloseMenuIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#676E85"
      fillRule="evenodd"
      d="M3.6.364a3 3 0 0 0-3 3v9.273a3 3 0 0 0 3 3h10.8a3 3 0 0 0 3-3V3.364a3 3 0 0 0-3-3H3.6Zm6.026 1.528a2 2 0 0 0-2 2v8.218a2 2 0 0 0 2 2h4.094a2 2 0 0 0 2-2V3.892a2 2 0 0 0-2-2H9.626Z"
      clipRule="evenodd"
    />
  </svg>
);
export default CloseMenuIcon;