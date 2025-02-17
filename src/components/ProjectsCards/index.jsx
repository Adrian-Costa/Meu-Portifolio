
import style from "../ProjectsCards/ProjectsCard.style.module.scss"

export const ProjectsCard = ({title, description, linkRepo, linkPage, src, alt}) =>{
    return(
        <div className={style.cardContainer}>
            <div className={style.info}>
                <h3>{title}</h3>
                <p className={style.description}>{description}</p>
                <a target="_blank" href={linkRepo}>Acessar Repositório</a>
                <a target="_blank" href={linkPage}>Acessar Página</a>
            </div>
            <div className={style.projectImage}>
                <img src={src} alt={alt} />
            </div>
        </div>
    )
}
