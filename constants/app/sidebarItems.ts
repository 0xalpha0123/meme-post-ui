import {
  BitcoinCardIcon,
  CategoryIcon,
  ChartIcon,
  DocumentLikeIcon,
  DocumentTextIcon,
  HomeIcon,
  SunIcon,
  UserIcon,
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
      {
        id: "dashboard",
        title: "Dashboard",
        breadcrumbText: "Dashboard",
        icon: CategoryIcon,
        isValiable: false,
        url: "/dashboard",
      },
      {
        id: "analytics",
        title: "Analytics",
        breadcrumbText: "Analytics",
        icon: ChartIcon,
        isValiable: false,
        url: "/analytics",
      },
      {
        id: "posts",
        title: "Posts",
        breadcrumbText: "Posts",
        icon: DocumentLikeIcon,
        isValiable: true,
        url: "/posts",
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
        id: "profile",
        title: "Profile",
        breadcrumbText: "Profile",
        icon: UserIcon,
        isValiable: true,
        url: "/profile",
      },
      {
        id: "tokens",
        title: "Token Manage",
        breadcrumbText: "Token Manage",
        icon: BitcoinCardIcon,
        isValiable: true,
        url: "/tokens",
      },
      {
        id: "preference",
        title: "Preference",
        breadcrumbText: "Preference",
        icon: SunIcon,
        isValiable: false,
        url: "/account",
      },
    ],
  },
  {
    name: "Social",
    items: [
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
