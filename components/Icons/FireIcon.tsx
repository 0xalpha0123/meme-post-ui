import React from "react";

import { IconProps } from "../../Interfaces/Icon";

const FireIcon = (props: IconProps) => {
  const size = props.size || "w-4 h-4";
  const className = props.className || "";

  return (
    <svg
      className={`${size} ${className}`}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_76_1395)">
        <path
          d="M11.9758 0H12.1125C12.4961 0.00859375 12.7902 0.440234 12.6324 0.796094C12.4203 1.23672 12.2453 1.70078 12.1844 2.18867C12.084 2.89844 12.1863 3.64219 12.5109 4.28438C12.8625 5.01094 13.4531 5.5957 14.1164 6.04375C14.4367 6.25273 14.7566 6.46367 15.0617 6.69492C15.8422 7.32383 16.5148 8.08984 17.0269 8.95195C17.541 9.81367 17.8871 10.7902 17.934 11.798C17.9887 13.3605 17.566 14.9375 16.7285 16.2586C15.7617 17.7961 14.2629 19.0008 12.5371 19.577C11.741 19.8551 10.8984 19.9762 10.0578 20H9.86601C8.4332 19.9719 7.01132 19.541 5.80429 18.7691C3.88085 17.5523 2.49531 15.4965 2.14804 13.2406C1.93085 11.8672 2.10468 10.4285 2.67343 9.15742C2.90781 8.64531 3.21249 8.15156 3.64335 7.78164C3.94374 7.52383 4.32695 7.3418 4.72929 7.34648C4.98007 7.34648 5.21445 7.53359 5.27656 7.77578C5.3039 7.87578 5.29648 7.98125 5.28867 8.08359C5.23437 8.64375 5.23515 9.20937 5.29335 9.76914C5.34374 10.2086 5.42656 10.6527 5.62382 11.0523C5.70937 11.2184 5.82968 11.377 5.99843 11.4645C6.14765 11.5426 6.32382 11.5465 6.48749 11.523C6.53359 11.5137 6.5957 11.5117 6.61015 11.4555C6.68085 11.2266 6.6332 10.9828 6.61288 10.7496C6.49023 9.76953 6.25351 8.80156 6.23398 7.81055C6.2121 7.08555 6.18359 6.35898 6.24062 5.63477C6.31953 4.52891 6.55976 3.40859 7.13476 2.44766C7.55468 1.73242 8.16874 1.13008 8.89726 0.732813C9.83085 0.205859 10.916 0.0246094 11.9758 0ZM9.96015 1.525C9.30038 1.77422 8.70781 2.2125 8.30429 2.79414C7.77421 3.53828 7.53867 4.44766 7.44023 5.34453C7.34648 6.15039 7.38163 6.96367 7.40507 7.77266C7.41835 8.49883 7.56718 9.21172 7.67499 9.92695C7.76523 10.5051 7.89101 11.1016 7.76367 11.684C7.67304 12.1062 7.3582 12.4734 6.94609 12.6094C6.48281 12.7578 5.96054 12.743 5.51757 12.5344C4.98945 12.2922 4.6371 11.7848 4.43515 11.2555C4.15898 10.5512 4.0996 9.78828 4.07421 9.03945C3.71406 9.5582 3.51288 10.1656 3.36953 10.7754C3.27304 11.2652 3.21523 11.7652 3.23788 12.2652C3.28242 13.8949 3.97499 15.484 5.09413 16.6629C6.24101 17.8906 7.85156 18.6922 9.53359 18.8043C11.166 18.9266 12.8363 18.4219 14.1262 17.4137C15.523 16.3484 16.4773 14.7176 16.7039 12.9738C16.7988 12.2855 16.8055 11.5727 16.6074 10.9008C16.2301 9.57656 15.3519 8.44063 14.2926 7.58281C13.8242 7.22578 13.2996 6.94688 12.8555 6.55703C11.9508 5.80664 11.2441 4.7668 11.0523 3.59258C10.9043 2.80586 10.9769 1.98828 11.2035 1.22344C10.7801 1.27969 10.359 1.36875 9.96015 1.525Z"
          fill="#FF6471"
        />
      </g>
      <defs>
        <clipPath id="clip0_76_1395">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FireIcon;
