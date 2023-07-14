import React from 'react'
import "./search.scss";
const SearchBar = () => {
    return (
        <div className='SearchBar'>
            <form className='SearchForm' action="">
                <input className='searchInp' placeholder='Search' type="text" />
            </form>
            <div className="btnDiv">
                <div className="createBtn SrcBtn">Create</div>
                <div className="filterBtn SrcBtn"><i className="fa fa-filter" aria-hidden="true"></i>
                </div>
                <div className="notifyBtn SrcBtn"><i className="fa fa-flag-o" aria-hidden="true"></i>

                </div>
            </div>
        </div>
    )
}

export default SearchBar