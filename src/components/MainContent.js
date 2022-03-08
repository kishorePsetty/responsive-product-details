import React from "react";
import { SvgIcon } from "@mui/material";
import { ReactComponent as Heart } from "../assets/images/Heart.svg";
import HeroImage from "../assets/images/HeroImage.png";
import HeroImageRow2Image1 from "../assets/images/Row2Image1.png";
import HeroImageRow2Image2 from "../assets/images/Row2Image2.png";
import Row3Image from "../assets/images/Row3Image.png";
import Row4Image from "../assets/images/Row4Image.png";
import ProductDeailsFooter from "./ProductDeailsFooter";

export default function MainContent() {
    return (
        <div className="main">
            <div className="heroImage">
                <div className="imageFavorite">
                    <SvgIcon component={Heart} />
                </div>
                <div>
                    <img src={HeroImage} />
                </div>
            </div>
            <div className="heroImageRow2">
                <div className="image1">
                    <img src={HeroImageRow2Image1} />
                </div>
                <div className="image2">
                    <img src={HeroImageRow2Image2} />
                </div>
            </div>
            <div className="heroImageRow3">
                <img src={Row3Image} />
            </div>
            <div className="heroImageRow3">
                <img src={Row4Image} />
            </div>
            <ProductDeailsFooter />
        </div>
    );
}
