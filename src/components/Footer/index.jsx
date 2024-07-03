
import { FaCopy } from 'react-icons/fa';
import style from "../Footer/Footer.style.module.scss"

export const Footer = () => {
    return(
        <footer className={style.footer}>
            <div className={style.call}>
                <hr className={style.hr1} />
                <h4 className={style.title4}>Vamos Conversar!</h4>
                <hr className={style.hr2} />
            </div>
            <div className={style.button}>
                <button>
                    <FaCopy size={45} color='red'/>
                </button>
                <h5 className={style.title5}>adriancosta851@gmail.com</h5>
            </div>
            <div className={style.bottomNav}>
                <a href="#" className="mark">Dri</a>
                <div className={style.bottomLine}>
                    <hr />
                </div>
                <a href="#">Github</a>
                <a href="#">Linkedin</a>
            </div>
        </footer>
    )
}
