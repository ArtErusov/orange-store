import React from "react";
import styles from '../header.module.scss';

 const SelectCity = (props) => {
    const [citySelect, setCitySelect] = React.useState(0); //ссылаемся на массив в app
    const [visible, setVisible] = React.useState(false);

    const onClickHide =(i) => {
        setCitySelect(i);
        setVisible(false);
    };
    
    return (<React.Fragment>
    <span className={styles.selectCity} onClick={()=>setVisible(!visible)}>{props.cityList[citySelect]}  
        {visible &&  (
        <div class={styles.selectCity__popup }>
            <ul>
                {props.cityList.map((name, index) =>
                <li 
                key={index}
                onClick={() => onClickHide(index)}
                className={citySelect === index ? styles.active : ''}>
                    {name}
                </li>
                )}
            </ul>    
        </div>
        )}
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 8 5" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.40546L1.2543 0L0 1.49568L4 5L8 1.49568L6.7457 0L4 2.40546Z" fill="#FF9B04"/>
            </svg>
        </span>  
    </React.Fragment>  
    );
 }

export default SelectCity;