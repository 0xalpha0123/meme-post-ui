import {
  CategoryIcon,
  ChartIcon,
  ComputingIcon,
  DiscountCircleIcon,
  DocumentTextIcon,
  HomeIcon,
  LayerIcon,
  SunIcon,
  SwapIcon,
} from "../../icons";

export const sidebarItems = [
  {
    name: "Menu",
    items: [
      {
        id: "home",
        title: "Home",
        breadcrumbText: "Home",
        icon: HomeIcon,
        isValiable: true,
        url: "/",
      },
      // {
      //   id: "dashboard",
      //   title: "Dashboard",
      //   breadcrumbText: "Dashboard",
      //   icon: CategoryIcon,
      //   isValiable: false,
      //   url: "/test",
      // },
      {
        id: "analytics",
        title: "Analytics",
        breadcrumbText: "Analytics",
        icon: ChartIcon,
        isValiable: false,
        url: "/analytics",
      },
      {
        id: "stake",
        title: "Stake",
        breadcrumbText: "Stake",
        icon: LayerIcon,
        isValiable: true,
        url: "/stake",
      },
      {
        id: "swap",
        title: "Swap",
        breadcrumbText: "Swap Tokens",
        icon: SwapIcon,
        isValiable: true,
        url: "/swap",
      },
      {
        id: "bond",
        title: "Bond",
        breadcrumbText: "Bond",
        icon: DiscountCircleIcon,
        isValiable: true,
        url: "/bond",
      },
      {
        id: "tracker",
        title: "Tracker",
        breadcrumbText: "Tax Tracker",
        icon: ComputingIcon,
        isValiable: true,
        url: "/tracker",
      },
      {
        id: "test",
        title: "Test",
        breadcrumbText: "Test",
        icon: CategoryIcon,
        isValiable: false,
        url: "/test",
      },
    ],
  },
  {
    name: "Account",
    items: [
      {
        id: "preference",
        title: "Preference",
        breadcrumbText: "Preference",
        icon: SunIcon,
        isValiable: false,
        url: "/account",
      },
      {
        id: "docs",
        title: "Docs",
        breadcrumbText: "Documents",
        icon: DocumentTextIcon,
        isValiable: false,
        url: "/docs",
      },
    ],
  },
];
