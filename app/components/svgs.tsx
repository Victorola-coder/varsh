import { clsx } from "clsx";

export function ArrowRightIcon({ className, fill }: SVGProps) {
  return (
    <svg
      width="29"
      height="12"
      className={className}
      viewBox="0 0 29 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.5303 6.53033C28.8232 6.23744 28.8232 5.76256 28.5303 5.46967L23.7574 0.696699C23.4645 0.403806 22.9896 0.403806 22.6967 0.696699C22.4038 0.989593 22.4038 1.46447 22.6967 1.75736L26.9393 6L22.6967 10.2426C22.4038 10.5355 22.4038 11.0104 22.6967 11.3033C22.9896 11.5962 23.4645 11.5962 23.7574 11.3033L28.5303 6.53033ZM0 6.75L28 6.75V5.25L0 5.25L0 6.75Z"
        fill="white"
      />
    </svg>
  );
}

export const EyeIcon = ({ className, fill }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="10"
      className={className}
      viewBox="0 0 22 10"
      fill="none"
    >
      <path
        d="M21 1C21 1 17 7 11 7C5 7 1 1 1 1"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 6.5L15.5 9"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 4L21 6"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 6L3 4"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6.5L6.5 9"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
