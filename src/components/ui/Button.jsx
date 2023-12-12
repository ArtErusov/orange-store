import styles from './ui.module.scss';

const Button = (props) => {
    return(
    <button onClick={props.onClick} className={styles.button}>{props.name}</button>
    );
}


export default Button;