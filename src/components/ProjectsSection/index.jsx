
import style from "../ProjectsSection/ProjectsSection.style.module.scss"
import { ProjectsCard } from "../ProjectsCards"

export const Projects = () => {
    return(
        <section className={style.projectsSection}>
            <div className={style.title}>
                <h2 className={style.titleP}>Meus Projetos</h2>
                <hr className={style.hrP} />
            </div>

            <section className={style.cardsSection}>
                <ProjectsCard title={"Driming"} 
                description={"Projeto pessoal que desenvolvi inteiramente usando ReactJs e Sass, trata-se de um site de streaming chamado 'Driming' que é uma marca pessoal, e possui uma seção de animes e uma de filmes, contando também com um cabeçalho com um menu de navegação e introduz um filme, e um rodapé."}
                link={"https://github.com/Adrian-Costa/Driming"}
                src={"src/assets/driming-pi.png"}
                alt={"Driming project image"} />

                <ProjectsCard title={"Maratona Invertida"} 
                description={"Projeto de estudos feito durante meu curso, desenvolvi usando html e css, representa um site de streaming inspirado em Stranger Things, nele foram trabalhados principalmente os conceitos de MediaQuery e Responsividade."}
                link={"https://github.com/Adrian-Costa/projeto-st"}
                src={"src/assets/kenzie-pi.png"}
                alt={"Driming project image"} />

                <ProjectsCard title={"Verificador de idade"} 
                description={"Um projeto que fiz antes de iniciar meu curso, que trabalha principalmente com lógica de programação, foi utilizado, Javascript, Html, e CSS. O ano de nascimento é inserido e a idade é calculada subtraindo o ano de nascimento do ano atual, e após uma série de confirmações é impresso na tela uma imagem e mensagem que represente a idade obtida como resultado."}
                link={"https://github.com/Adrian-Costa/Verificador-de-Idade"}
                src={"src/assets/ageVerify-pi.png"}
                alt={"Driming project image"} />
            </section>
        </section>
    )
}
