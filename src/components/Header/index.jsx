
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import styles from "../Header/Header.style.module.scss"

export const Header = () => {
    return(
        <header>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"/>
            <nav>
                <div className={styles.links}>
                    <a href="#" className="mark">Dri</a>
                    <a href="#">projetos</a>
                </div>
                <div className={styles.line}>
                    <hr/>
                </div>
                <div className={styles.links}>
                    <a href="#">sobre</a>
                    <a href="#">contato</a>
                </div>
            </nav>
            <section className={styles.presentation}>
                <h1 className={styles.title1}>Oi<span>!</span> Eu sou A<span>dri</span>an Costa<span>,</span> <span>D</span>esenvolvedor <span>W</span>eb<span>!</span></h1>
                <div className={styles.phraseContainer}>
                    <div className={styles.phrase}>
                        <p className={styles.phrase1}>RESILIÊNCIA E AMBIÇÃO, FAZEM UM PROGRAMADOR,</p>
                        <p className={styles.phrase2}>O CONFORTO OS MANTÉM ESTAGNADOS,</p>
                        <p className={styles.phrase3}>EU SAIO DELE E FAÇO ACONTECER</p>
                    </div>
                    <div className={styles.lines}>
                        <hr />
                        <hr />
                    </div>
                </div>
            </section>
            <section className={styles.buttons}>
                    <a href='https://github.com/Adrian-Costa' target='_blank' className={styles.button}>
                        <FaGithub size={35} color='red'/>
                        GITHUB
                    </a>
                    <a href='https://www.linkedin.com/in/adrian-costa-8352a1259/' target='_blank' className={styles.button}>
                        <FaLinkedin  size={35} color='red'/>
                        LINKEDIN
                    </a>
            </section>
        </header>
    )
}
