import styles from './components.module.scss';
import Button from './ui/Button';
import Modal from './ui/Modal';

const Registration = (props) => {
    return(<Modal 
    onHideRegistration={props.onHideRegistration} 
    // функция закрытия модалки по клику вне области починить
    >
     <h1>Привет мир</h1>
     <Button onClick={props.onHideRegistration} name={"Закрыть"}/>
    </Modal>)
}


export default Registration;