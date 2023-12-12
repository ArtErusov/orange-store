import styles from './components.module.scss';
import sadnessMobile from '../assets/img/sadnessMobile.svg';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

const container = {
    padding: 12,
    background: 'red'
}

const NotFound = () => {
    return(
        <div className={styles.not_faund}><img src={sadnessMobile} alt="И тут неудача" /> 
            <p>Уупс 404: что-то пошло не так.</p>
            <p>Кажется этой страницы не существует.</p>
            <div>
                <Link  to="http://localhost:3000/"><Button name={"Вернуться на главную"}/></Link>
            </div>
        </div>
    )
}


export default NotFound;


