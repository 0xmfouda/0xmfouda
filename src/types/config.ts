export type SiteConfig = {
  title: string;
  subtitle: string;
  lang: "en" | "ar";
  favicon: Favicon[];
};

export type ProfileConfig = {
  name: string;
};

export type Favicon = {
  src: string;
  theme?: "light" | "dark";
  sizes?: string;
};
