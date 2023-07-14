import React from 'react'
import "./search.scss";
const SearchBar = () => {
    return (
        <div className='SearchBar'>
            <div className="btnDiv">
                {/* <i className="fa fa-plus-square-o" aria-hidden="true"></i> */}
                <div className="createBtn SrcBtn"><i className="fa fa-plus-square " aria-hidden="true"> </i>Create</div>
                <div className="filterBtn SrcBtn"><i className="fa fa-filter" aria-hidden="true"></i></div>
                <div className="notifyBtn SrcBtn"><i className="fa fa-bell" aria-hidden="true"></i></div>
            </div>
            <form className='SearchForm' action="">
                <input className='searchInp' placeholder='Search' type="text" />
            </form>
        </div>
    )
}

export default SearchBar