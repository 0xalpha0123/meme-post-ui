import {
  ComputingIcon,
  DiscountCircleIcon,
  LayerIcon,
  SwapIcon,
} from "../../icons";

interface TokenManageItem {
  id: string;
  label: string;
  icon: (props: any) => JSX.Element;
}

export const tokenManageList: TokenManageItem[] = [
  { id: "stake", label: "Stake", icon: LayerIcon },
  { id: "bond", label: "Bond", icon: DiscountCircleIcon },
  { id: "swap", label: "Swap", icon: SwapIcon },
  { id: "tracker", label: "Tracker", icon: ComputingIcon },
];
