"use client";
import "@/styles/style.css";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { text, title } from "./primitives";

const Tabss = () => {
  
  return (
    <section>
 <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="Develeppeur Web" title="DEVELOPPEUR WEB">
          <Card>
            <CardBody>
            <h3 className={title({ color: "violet", size:"sm"})}>Creation de Support Web</h3>
            <img src={'https://derrickogouwole.fr/wp-content/uploads/2024/01/about-image-1.webp'} alt="billing" className="w-[30%] h-[30%]" />
            <p  className={text()}>Avec mes compétences en développement web, je suis capable de donner vie à mes conceptions.<br/>
            <br/>Je maîtrise plusieurs langages de programmation tels que HTML, CSS, JavaScript et PHP.<br/><br/>
            Je suis familier avec les frameworks et les outils modernes qui me permettent de créer<br/> des sites web interactifs, réactifs et performants.
            </p></CardBody>
          </Card>  
        </Tab>
        <Tab key="AUDIT SUPPORT WEB" title="AUDIT SUPPORT WEB">
          <Card>
          <CardBody>
            <h3 className={title({ color: "violet", size:"sm"})}>Audit Support Web </h3>
            <p  className={text()}>Avec mes compétences en développement web, je suis capable de donner vie à mes conceptions.<br/>
            <br/>Je maîtrise plusieurs langages de programmation tels que HTML, CSS, JavaScript et PHP.<br/><br/>
            Je suis familier avec les frameworks et les outils modernes<br/><br/> qui me permettent de créer des sites web interactifs, réactifs et performants.
            </p></CardBody>
          </Card>  
        </Tab>

        <Tab key="STRATEGY" title="STRATEGIE D'ACQUISITION">
          <Card>
          <CardBody>
            <h3 className={title({ color: "violet", size:"sm"})}>Stratégie d'Acquisition </h3>
            <p  className={text()}>Avec mes compétences en développement web, je suis capable de donner vie à mes conceptions.<br/>
            <br/>Je maîtrise plusieurs langages de programmation tels que HTML, CSS, JavaScript et PHP.<br/><br/>
            Je suis familier avec les frameworks et les outils modernes<br/><br/> qui me permettent de créer des sites web interactifs, réactifs et performants.
            </p></CardBody>
          </Card>  
        </Tab>
        
        <Tab key="ANALYTICS" title="ANALYTICS GA4">
          <Card>
          <CardBody>
            <h3 className={title({ color: "violet", size:"sm"})}>Google Analytics</h3>
            <p  className={text()}>Avec mes compétences en développement web, je suis capable de donner vie à mes conceptions.<br/>
            <br/>Je maîtrise plusieurs langages de programmation tels que HTML, CSS, JavaScript et PHP.<br/><br/>
            Je suis familier avec les frameworks et les outils modernes<br/><br/> qui me permettent de créer des sites web interactifs, réactifs et performants.
            </p></CardBody>
          </Card>  
        </Tab>
        <Tab key="FICHE ETABLISEMENT" title=" GESTION FICHE ETABLISEMENT GOOGLE">
          <Card>
          <CardBody>
            <h3 className={title({ color: "violet", size:"sm"})}>Fiche d'Etablissement</h3>
            <p  className={text()}>Avec mes compétences en développement web, je suis capable de donner vie à mes conceptions.<br/>
            <br/>Je maîtrise plusieurs langages de programmation tels que HTML, CSS, JavaScript et PHP.<br/><br/>
            Je suis familier avec les frameworks et les outils modernes<br/><br/> qui me permettent de créer des sites web interactifs, réactifs et performants.
            </p></CardBody>
          </Card>  
        </Tab> 

      </Tabs>
    </div>  
    
</section>
);
  
};

export default Tabss;