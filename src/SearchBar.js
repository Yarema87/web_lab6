import React from "react";

function SearchBar(){
    return(
        <div className="Search_bar">
            <span className="filter">
                <p className="filter_text">Filter 1</p>
                <button className="low_pointer">▼</button>
            </span>
            <span className="filter">
                <p className="filter_text">Filter 2</p>
                <button className="low_pointer">▼</button>
            </span>
            <span className="filter">
                <p className="filter_text">Filter 3</p>
                <button className="low_pointer">▼</button>
            </span>
            <span className="filter" id="fourth_filter">
                <button id="Apply">Apply</button>
            </span>
        </div>
    )
}

export default SearchBar;