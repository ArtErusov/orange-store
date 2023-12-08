import React from "react";
import styles from '../header.module.scss';
import IconArrow from "../../assets/icons/header/IconArrow";

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
           <IconArrow />
        </span>  
    </React.Fragment>  
    );
 }

export default SelectCity;