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
                <div className="filterBtn SrcBtn">+</div>
                <div className="notifyBtn SrcBtn"><img src="../../assets/img/logo.svg" alt="" /></div>
            </div>
        </div>
    )
}

export default SearchBar