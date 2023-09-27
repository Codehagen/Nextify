export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Nextify",
  description: "The best Nextjs starter templete",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      href: "/customers",
      title: "How it works",
    },
    {
      href: "/pricing",
      title: "Prices",
    },
  ],
  links: {
    twitter: "",
    github: "",
    docs: "",
  },
};
