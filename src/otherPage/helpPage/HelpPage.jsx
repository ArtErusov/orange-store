import styles from '../HelpPage.module.scss';
import TransitionTextPage from './TransitionTextPage';
import React from 'react';

const HelpPage = () =>{

    const reportChat = [
    {text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
    date: '12.10.2023',
    recovery: 'Возврат товара'
    }
]
    // данная страница является тестовой 



    const changeDescription =() => {

    }
    
    return(<div className={styles.container}>
    <div className={styles.input}>
        <textarea  placeholder='Введите ваше сообщение' className={styles.input__text}>
            </textarea> 
        <div className={styles.input__data}>
            <input className={styles.input__data_number} type="date" />
            <input className={styles.input__data_name} type="text" />
            <button onClick={changeDescription} className={styles.input__data_btn}>отправить сообщение</button>
        </div> 
    </div> 
    <div className={styles.chat}>
            <TransitionTextPage className={styles.chat__item} reportChat={reportChat}
            />
        </div>
    </div>);
}

export default HelpPage;