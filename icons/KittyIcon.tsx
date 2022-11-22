import React from "react";
import cx from "clsx";

import { IconProps } from "./";

const KittyIcon = (props: IconProps) => {
  const size = props.size || "w-4 h-4";
  const className = props.className || "";

  return (
    <svg
      className={cx(size, className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.87125 1.37375C2.03437 1.32125 2.20625 1.35344 2.37281 1.36344C3.39906 1.44656 4.43062 1.69406 5.32125 2.22594C4.51125 2.61438 3.7825 3.17156 3.1975 3.85344C2.66343 4.48531 2.25 5.2275 2.03968 6.03031C2.0075 5.90969 1.94562 5.80062 1.90375 5.68344C1.44875 4.54656 1.35656 3.3075 1.33875 2.095C1.33562 1.77281 1.56062 1.46313 1.87125 1.37375Z"
        fill="#E99A00"
      />
      <path
        d="M10.6884 2.23062C11.6709 1.65625 12.8103 1.40625 13.9384 1.35219C14.2409 1.34937 14.5241 1.55937 14.6244 1.84219C14.7013 2.04281 14.6628 2.26031 14.6641 2.46906C14.6288 3.67781 14.4881 4.91562 13.9631 6.02C13.6941 5.05187 13.1534 4.16875 12.4406 3.46375C11.9281 2.96187 11.3363 2.54 10.6884 2.23062Z"
        fill="#E99A00"
      />
      <path
        d="M5.32126 2.22594C6.2197 1.79406 7.22095 1.56656 8.21907 1.60531C9.07376 1.63813 9.9197 1.85625 10.6884 2.23063C11.3363 2.54 11.9281 2.96188 12.4406 3.46375C13.1534 4.16875 13.6941 5.05188 13.9631 6.02C14.0644 6.43344 14.1294 6.85625 14.1328 7.2825C14.1575 7.34031 14.095 7.355 14.0581 7.37063C13.6847 7.50625 13.3113 7.64188 12.9381 7.77875C12.8519 7.80688 12.7772 7.87438 12.755 7.96438C12.7134 8.10031 12.8034 8.25625 12.9406 8.29125C13.0188 8.31656 13.0988 8.28625 13.1728 8.26125C13.4825 8.14719 13.7925 8.03438 14.1031 7.9225C14.0478 8.49906 13.9044 9.06844 13.6634 9.59594C13.3259 9.44969 12.9922 9.29563 12.6531 9.15344C12.5191 9.09531 12.3506 9.17656 12.3075 9.315C12.2606 9.44063 12.3281 9.59219 12.4516 9.64375C12.7716 9.78844 13.0944 9.92594 13.4147 10.07C13.1841 10.4594 12.8953 10.8128 12.5688 11.1253C12.3575 10.9163 12.1494 10.7037 11.9366 10.4959C11.8375 10.3938 11.6581 10.3944 11.5613 10.4991C11.4588 10.5972 11.4603 10.7759 11.5634 10.8731C11.7606 11.075 11.9631 11.2719 12.1609 11.4734C12.1416 11.4881 12.1028 11.5178 12.0838 11.5325C11.5881 11.9016 11.0328 12.1859 10.4506 12.3906C9.96407 12.5562 9.46064 12.6872 8.94751 12.7328C8.63407 12.3097 8.02626 12.1512 7.54376 12.3572C7.35032 12.4347 7.18126 12.5669 7.05345 12.7306C6.8547 12.7234 6.66001 12.6822 6.46595 12.6428C5.55157 12.4553 4.66689 12.09 3.91595 11.5312C3.90001 11.5191 3.86814 11.4953 3.8522 11.4834C4.05501 11.2781 4.26189 11.0772 4.46282 10.8703C4.56126 10.7744 4.56345 10.6022 4.4672 10.5041C4.3722 10.3969 4.1897 10.3906 4.08939 10.4937C3.87189 10.7053 3.66032 10.9228 3.4447 11.1362C3.11282 10.8253 2.82407 10.4684 2.5897 10.0787C2.91251 9.93469 3.23689 9.79469 3.55907 9.65C3.6472 9.61344 3.7172 9.5325 3.72782 9.43625C3.74907 9.3025 3.65126 9.16563 3.51907 9.14031C3.4447 9.12219 3.37064 9.15 3.30345 9.17969C2.98407 9.32219 2.66407 9.46375 2.34314 9.60312C2.08907 9.07687 1.96095 8.49969 1.89126 7.92219C1.90282 7.925 1.92595 7.93 1.93751 7.9325C2.26532 8.03906 2.58532 8.16813 2.91126 8.28094C3.0347 8.33375 3.19095 8.27688 3.24876 8.155C3.32532 8.01562 3.24407 7.8275 3.09376 7.78094C2.71001 7.64313 2.32939 7.49594 1.94251 7.36719C1.91564 7.355 1.88907 7.34281 1.86282 7.33063C1.87501 6.8925 1.92032 6.45313 2.0397 6.03031C2.25001 5.2275 2.66345 4.48531 3.19751 3.85344C3.78251 3.17156 4.51126 2.61438 5.32126 2.22594ZM5.2997 5.6175C4.89439 5.695 4.60032 6.12156 4.67751 6.52813C4.73532 6.95 5.17376 7.26844 5.59314 7.18906C6.0247 7.13219 6.34564 6.67688 6.25189 6.25094C6.18282 5.8225 5.7222 5.51563 5.2997 5.6175ZM10.3597 5.61906C9.9572 5.69969 9.66689 6.12469 9.74439 6.52938C9.8022 6.94938 10.2375 7.26594 10.6553 7.18969C11.0878 7.13531 11.4116 6.68094 11.3191 6.25375C11.2513 5.82125 10.7847 5.51281 10.3597 5.61906ZM7.20095 7.18781C7.18532 7.47656 7.44407 7.74156 7.73314 7.73281C7.71907 7.96844 7.78845 8.24031 7.62345 8.43906C7.37532 8.76438 6.80282 8.73469 6.60001 8.37531C6.50314 8.24156 6.57751 8.04188 6.44032 7.93188C6.29595 7.795 6.02782 7.89094 6.0047 8.08875C5.98189 8.39406 6.1222 8.69969 6.34876 8.90156C6.61345 9.14344 6.99439 9.245 7.34595 9.17969C7.59564 9.13688 7.82626 9.00625 8.00032 8.82313C8.24376 9.08594 8.60939 9.2275 8.96657 9.195C9.42626 9.16219 9.86439 8.83094 9.97001 8.37406C9.99595 8.24156 10.0331 8.0825 9.94126 7.96688C9.84314 7.83625 9.62564 7.83531 9.52657 7.96563C9.44251 8.06219 9.48282 8.20094 9.43095 8.31094C9.34345 8.53156 9.10657 8.6675 8.87407 8.66625C8.62626 8.67375 8.37095 8.52313 8.29126 8.2825C8.24376 8.10344 8.27564 7.91563 8.26689 7.7325C8.44314 7.73563 8.61439 7.64031 8.71064 7.49406C8.82689 7.32313 8.82907 7.0825 8.71439 6.91063C8.62157 6.76656 8.45595 6.67 8.28407 6.66781C8.09439 6.66531 7.90439 6.66563 7.71501 6.6675C7.44189 6.66906 7.19876 6.91406 7.20095 7.18781Z"
        fill="#FFBA33"
      />
      <path
        d="M5.29969 5.6175C5.72219 5.51562 6.18282 5.8225 6.25188 6.25094C6.34563 6.67687 6.02469 7.13219 5.59313 7.18906C5.17376 7.26844 4.73532 6.95 4.67751 6.52812C4.60032 6.12156 4.89438 5.695 5.29969 5.6175Z"
        fill="black"
      />
      <path
        d="M10.3597 5.61906C10.7847 5.51281 11.2512 5.82125 11.3191 6.25375C11.4116 6.68094 11.0878 7.13531 10.6553 7.18969C10.2375 7.26594 9.80219 6.94937 9.74438 6.52937C9.66688 6.12469 9.95719 5.69969 10.3597 5.61906Z"
        fill="black"
      />
      <path
        d="M1.63407 7.71562C1.55532 7.53062 1.74782 7.30656 1.94251 7.36719C2.32938 7.49594 2.71001 7.64312 3.09376 7.78094C3.24407 7.8275 3.32532 8.01562 3.24876 8.155C3.19095 8.27687 3.0347 8.33375 2.91126 8.28094C2.58532 8.16812 2.26532 8.03906 1.93751 7.9325C1.82376 7.8825 1.67595 7.85094 1.63407 7.71562Z"
        fill="black"
      />
      <path
        d="M12.9381 7.77875C13.3113 7.64187 13.6847 7.50625 14.0581 7.37062C14.1266 7.3625 14.2016 7.35125 14.2641 7.38937C14.3988 7.45594 14.4481 7.64437 14.3628 7.76812C14.3075 7.86031 14.1966 7.88656 14.1031 7.9225C13.7925 8.03437 13.4825 8.14719 13.1728 8.26125C13.0988 8.28625 13.0188 8.31656 12.9406 8.29125C12.8035 8.25625 12.7135 8.10031 12.755 7.96437C12.7772 7.87437 12.8519 7.80687 12.9381 7.77875Z"
        fill="black"
      />
      <path
        d="M7.73315 7.73281C7.91096 7.73406 8.08908 7.73406 8.2669 7.7325C8.27565 7.91563 8.24377 8.10344 8.29127 8.2825C8.37096 8.52313 8.62627 8.67375 8.87408 8.66625C9.10658 8.6675 9.34346 8.53156 9.43096 8.31094C9.48283 8.20094 9.44252 8.06219 9.52658 7.96562C9.62565 7.83531 9.84315 7.83625 9.94127 7.96688C10.0331 8.0825 9.99596 8.24156 9.97002 8.37406C9.8644 8.83094 9.42627 9.16219 8.96658 9.195C8.6094 9.2275 8.24377 9.08594 8.00033 8.82312C7.82627 9.00625 7.59565 9.13688 7.34596 9.17969C6.9944 9.245 6.61346 9.14344 6.34877 8.90156C6.12221 8.69969 5.9819 8.39406 6.00471 8.08875C6.02783 7.89094 6.29596 7.795 6.44033 7.93188C6.57752 8.04188 6.50315 8.24156 6.60002 8.37531C6.80283 8.73469 7.37533 8.76437 7.62346 8.43906C7.78846 8.24031 7.71908 7.96844 7.73315 7.73281Z"
        fill="black"
      />
      <path
        d="M3.30345 9.17969C3.37064 9.15 3.4447 9.12219 3.51908 9.14031C3.65126 9.16562 3.74908 9.3025 3.72783 9.43625C3.7172 9.5325 3.6472 9.61344 3.55908 9.65C3.23689 9.79469 2.91251 9.93469 2.5897 10.0787C2.49689 10.1194 2.39626 10.1753 2.2922 10.1406C2.14345 10.1022 2.05595 9.92094 2.12126 9.78125C2.15658 9.68437 2.25501 9.63969 2.34314 9.60312C2.66408 9.46375 2.98408 9.32219 3.30345 9.17969Z"
        fill="black"
      />
      <path
        d="M12.3075 9.315C12.3506 9.17656 12.5191 9.09531 12.6531 9.15344C12.9922 9.29563 13.3259 9.44969 13.6634 9.59594C13.7497 9.63344 13.8494 9.67031 13.8928 9.76156C13.9722 9.90094 13.8906 10.0959 13.7369 10.1391C13.6237 10.1791 13.515 10.1131 13.4147 10.07C13.0944 9.92594 12.7716 9.78844 12.4516 9.64375C12.3281 9.59219 12.2606 9.44062 12.3075 9.315Z"
        fill="black"
      />
      <path
        d="M4.08937 10.4938C4.18969 10.3906 4.37219 10.3969 4.46719 10.5041C4.56344 10.6022 4.56125 10.7744 4.46281 10.8703C4.26187 11.0772 4.055 11.2781 3.85219 11.4834C3.75094 11.5766 3.665 11.6888 3.55125 11.7672C3.39625 11.8613 3.17562 11.7456 3.16 11.5666C3.13625 11.37 3.33531 11.2659 3.44469 11.1363C3.66031 10.9228 3.87187 10.7053 4.08937 10.4938Z"
        fill="black"
      />
      <path
        d="M11.5613 10.4991C11.6581 10.3944 11.8375 10.3937 11.9366 10.4959C12.1494 10.7037 12.3575 10.9162 12.5688 11.1253C12.6741 11.2528 12.8575 11.3472 12.865 11.53C12.8763 11.7225 12.6447 11.8675 12.4766 11.77C12.3569 11.6884 12.2678 11.5703 12.1609 11.4734C11.9631 11.2719 11.7606 11.075 11.5634 10.8731C11.4603 10.7759 11.4588 10.5972 11.5613 10.4991Z"
        fill="black"
      />
      <path
        d="M7.20093 7.18781C7.19874 6.91406 7.44187 6.66906 7.71499 6.6675C7.90437 6.66563 8.09437 6.66531 8.28405 6.66781C8.45593 6.67 8.62155 6.76656 8.71437 6.91063C8.82905 7.0825 8.82687 7.32313 8.71062 7.49406C8.61437 7.64031 8.44312 7.73563 8.26687 7.7325C8.08905 7.73406 7.91093 7.73406 7.73312 7.73281C7.44405 7.74156 7.1853 7.47656 7.20093 7.18781Z"
        fill="#CE3B3B"
      />
      <path
        d="M3.91594 11.5312C4.66688 12.09 5.55157 12.4553 6.46594 12.6428C6.66 12.6822 6.85469 12.7234 7.05344 12.7306C6.81625 13.0297 6.73969 13.4456 6.85094 13.8103C6.90782 14.0166 7.035 14.1941 7.17813 14.35C6.585 14.2953 5.99688 14.1544 5.44875 13.9197C4.94375 13.6978 4.45813 13.3784 4.15469 12.9072C3.89344 12.5059 3.80219 11.9969 3.91594 11.5312Z"
        fill="#CE3B3B"
      />
      <path
        d="M10.4506 12.3906C11.0328 12.1859 11.5881 11.9016 12.0838 11.5325C12.2 12.0044 12.1025 12.5203 11.8341 12.9244C11.5425 13.3663 11.0903 13.6756 10.6147 13.8919C10.0494 14.1441 9.43844 14.295 8.82281 14.3497C8.98438 14.1731 9.12407 13.9666 9.17063 13.7278C9.24782 13.3847 9.16625 13.0088 8.9475 12.7328C9.46063 12.6872 9.96407 12.5563 10.4506 12.3906Z"
        fill="#CE3B3B"
      />
      <path
        d="M7.54375 12.3572C8.02625 12.1512 8.63406 12.3097 8.9475 12.7328C9.16625 13.0087 9.24781 13.3847 9.17062 13.7278C9.12406 13.9666 8.98437 14.1731 8.82281 14.3497C8.57812 14.5553 8.26344 14.6859 7.94 14.6641C7.65719 14.6556 7.39344 14.5272 7.17812 14.35C7.035 14.1941 6.90781 14.0166 6.85094 13.8103C6.73969 13.4456 6.81625 13.0297 7.05344 12.7306C7.18125 12.5669 7.35031 12.4347 7.54375 12.3572Z"
        fill="#FF7A00"
      />
    </svg>
  );
};

export default KittyIcon;
