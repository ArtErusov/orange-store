import React from "react";
import styles from '../header.module.scss';
import IconSearch from "../../assets/icons/header/IconSearch";


const Search = (props) =>{
    return(<div className={styles.search}>
  <input value={props.searchValue} onChange={(event) => props.setSearchValue(event.target.value)} className="search__input" type="text" placeholder="Игры для PlayStation....">
          </input>
        <button className={styles.search__btn}>
            <IconSearch />
        </button>
    </div>);
}

export default Search;