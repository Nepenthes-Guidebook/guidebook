import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    description: (
      <>
        <div className="hero-container">
          <Heading as="h1" className="hero__title">
            Nepenthes
          </Heading>
          <p>
            NEPENTHES est un forum RPG qui tient de la fiction spéculative, se
            déroulant dans une réalité contemporaine alternative. Semblant de
            société ultramoderne éclairée par les néons, entre excès, contrôle
            et illusion de liberté, son univers mêle satire et dystopie. Seront
            abordées, sans prétention et sous conditions formulées dans le
            règlement, les thématiques de l'identité, de l'éthique, des idéaux
            et de leurs échecs à faire société - l'idée n'est pas ici de dresser
            un portrait grotesque de tous les extrêmes ❤️
            <br />
            <br />
            NEPENTHES se destine à tout rôliste de plus de 18 ans sans condition
            de rythme. Les dynamiques de RP se concentrent autour d'intrigues
            sociales, que vous serez libres de pousser ou non, de complots,
            performances et course à la popularité qui impacteront vos
            personnages. Mettez vous à l'aise : bienvenue à la maison !
          </p>
        </div>
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--12")}>
      <div className="padding-horiz--md">
        <div>{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
