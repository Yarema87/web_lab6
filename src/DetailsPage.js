import React from "react";
import Header from "./header";
import Footer from "./footer";
import CarInfo from "./car_info";
import OtherDetails from "./other_details";

function DetailsPage(){
    return(
        <div>
            <Header />
            <CarInfo />
            <OtherDetails />
            <Footer />
        </div>
    )
}

export default DetailsPage;