export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Accueil",
			href: "/",
		},
    {
      label: "A propos de moi",
      href: "/",
    },
    
    {
      label: "Blog",
      href: "/",
    },
    {
      label: "Me contacter",
      href: "/",
    }
	],
	navMenuItems: [
		{
			label: "Accueil",
			href: "/",
		},
		{
			label: "A propos de moi",
			href: "/",
		},
		{
			label: "Blog",
			href: "/",
		},
		{
			label: "Me contacter",
      		href: "/",
		},
		
	],
	links: {
		github: "https://github.com/wilfriedogouwole",
		/*docs: "https://nextui.org",*/
		Linkedin: "https://www.linkedin.com/in/derrickogouwole/",
		Instagram: "",
		discord: "#",
        sponsor: "#"
	},
};
