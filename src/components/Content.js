import React from "react";
import ProductDeailsFooter from "./ProductDeailsFooter";
import LeftContent from "./LeftContent";
import MainContent from "./MainContent";
import RightContent from "./RightContnent";

export default function Content() {
    const productLinks = ["details", "delivery", "fit", "share"];
    const productSizes = ["XS", "S", "M", "L", "XXL"];

    return (
        <div className="content">
            <div className="contentContainer">
                <LeftContent />
                <MainContent />
                <RightContent />
                <div className="hideDesktop">
                    <ProductDeailsFooter />
                </div>
            </div>
        </div>
    );
}
