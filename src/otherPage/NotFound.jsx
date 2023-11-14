import styles from './ptherPage.module.scss';
import sadnessMobile from '../assets/img/sadnessMobile.svg';

const NotFound = () => {
    return(<div>
        <div className={styles.root}><img src={sadnessMobile} alt="И тут неудача" /></div>

        <div className={styles.root}>
            <p className={styles.root}>Уупс 404: что-то пошло не так.</p>
            <p className={styles.root}>Кажется этой страницы не существует.</p>
        </div>
    </div>)
}


export default NotFound;