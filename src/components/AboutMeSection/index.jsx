
import styles from "../AboutMeSection/AboutMe.style.module.scss"

export const AboutMe = () => {
    return(
        <section className={styles.aboutMe}>
            <div className={styles.image}>
            </div>
            <div className={styles.text}>
                <div className={styles.title}>
                    <h2 className={styles.title2}>Sobre Mim</h2>
                    <hr className={styles.titleLine} />
                </div>
                <div>
                    <p>Fazem aproximadamente dois anos que terminei o ensino médio e iniciei os meus estudos em desenvolvimento web, eu não havia planejado trabalhar com isso e mas depois de uma breve pesquisa fiquei maravilhado com a área e com as possibilidades que o universo da programação poderia me proporcionar.</p>

                    <p>Passei um tempo estudando por conta própria no qual pude aprender bem a base e a lógica de programação, até iniciar meus estudos na Kenzie Academy Brasil, que me abriu muitas portas e me passou tanto conhecimento. Desenvolvi projetos, aprimorei minhas Soft Skills, poli e aperfeiçoei o meu código, além de firmar conteúdos passados e aprender boas práticas.</p>
                    
                    <p>Atualmente sou um Desenvolvedor Full-Stack, mas prefiro focar apenas no front-End, mantenho aprimorando meu currículo, e procuro minha primeira oprtunidade de emprego, sou resiliente, esforçado, perfeccionista e priorizo sempre as boas práticas.</p>
                </div>
            </div>
        </section>
    )
}
