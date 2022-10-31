import type { ReactElement } from "react";

export interface LayoutProps {
  children: ReactElement;
  metaInfo: MetaInfo;
  layoutConfig: LayoutConfig;
}

export interface MetaInfo {
  title: string | undefined;
  description?: string | undefined;
  keywords?: string | undefined;
}

export interface LayoutConfig {
  header?: boolean;
  footer?: boolean;
  breadcrumb?: boolean;
}
