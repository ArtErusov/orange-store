import React from 'react';
import ReactPaginate from 'react-paginate'; 
const Pagiation = (props) =>{

// компонент https://github.com/AdeleD/react-paginate

const [currentPage, setCurrentPage] = React.useState(1); // показывает какую страницу нужно рендерить

props.onSaveCurrent(currentPage);

return(
<ReactPaginate
    className="pagiation"        
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event) => setCurrentPage(event.selected + 1)}
    pageRangeDisplayed={5}
    pageCount={3}
    renderOnZeroPageCount={null}
/>);
}

export default Pagiation;
