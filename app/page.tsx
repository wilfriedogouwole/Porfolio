import Hero from "@/components/Hero";
import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Code } from "@nextui-org/code";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";
export default function Home() {
	return (
		<>
			<section>
				<div className="flexStart">
					<div className="">
						<Hero />
					</div>
				</div>
			</section>

		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 " >
			<div className="inline-block text-center justify-center max-w-3xl">
				<h5 className={subtitle()}>Qui suis-je ? &nbsp;</h5>
				<p className={title()}>On m'appelle<span className={title({ color: "violet" })}> Derrick, Chef de projet digital </span>
				   habitant sur Caen et très passionné des IT. </p>
				
				<br />
		
				<h2 className={subtitle({ class: "mt-4 text-center" })}>
				Je suis un professionnel passionné par la gestion de projets digitaux et j'ai acquis une solide expertise dans plusieurs domaines clés, notamment en tant que webdesigner, développeur web et gestionnaire de projets digitaux.				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "danger", radius: "full", variant: "shadow" })}
				>
TÉLÉCHARGER MON CV				</Link>
				
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div>
		</section>
		
	</>


)
	
}
