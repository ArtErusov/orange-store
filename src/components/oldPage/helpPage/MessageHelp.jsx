import styles from './HelpPage.module.scss';

const MessageHelp = (props) =>{


    return(<div className={styles.chat__item}>
        <div className={styles.chat__item_flex}>
            <p>{props.date}</p>
            <p>{props.recovery}</p>
        </div>
    <p className={styles.chat__item_text}>{props.text}</p>
    <button className={styles.chat__item_btn}>Удалить</button>
    </div>);
}

export default MessageHelp;