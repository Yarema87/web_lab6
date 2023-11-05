import React from "react";
import Header from "./header";
import Footer from "./footer";
import SearchBar from "./SearchBar";
import CatalogMain from "./CatalogMain";

function CatalogPage(){
    return(
        <div>
            <Header />
            <SearchBar />
            <CatalogMain />
            <Footer />
        </div>
    )
}

export default CatalogPage;