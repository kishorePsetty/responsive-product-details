import React from "react";
import HeroImage from "../assets/images/HeroImage.png";
import HeroImage1 from "../assets/images/HeroImage1.png";
import HeroImageRow2Image1 from "../assets/images/Row2Image1.png";
import HeroImageRow2Image2 from "../assets/images/Row2Image2.png";
import Row3Image from "../assets/images/Row3Image.png";
import Row4Image from "../assets/images/Row4Image.png";

export default function RightContent() {
    const productSizes = ["XS", "S", "M", "L", "XXL"];
    const images = [
        { url: HeroImage },
        { url: HeroImage1 },
        { url: HeroImageRow2Image1 },
        { url: HeroImageRow2Image2 },
        { url: Row3Image },
        { url: Row4Image },
    ];

    return (
        <div className="right">
            <div className="imageScrollContainer hideDesktop">
                {images.map((image, index) => {
                    return (
                        <div key={index} className="imageContainer">
                            <img src={image.url} className="productImage" />
                        </div>
                    );
                })}
            </div>
            <div className="productName">JONATHAN SIMKHAI</div>
            <div className="productSubName">
                Lurex Linen Viscose Jacket in Conchiglia
            </div>
            <div className="productPrice">$225</div>
            <div className="productColor">
                <span className="productPrice">COLOR </span>
                <span className="productSubName">CONCHIGLIA</span>
            </div>
            <div className="productAllImages">
                <div className="productAllImage productImageActive">
                    <img src={HeroImage} className="productImage" />
                </div>
                <div className="productAllImage">
                    <img src={HeroImage1} className="productImage" />
                </div>
            </div>
            <div className="productSizeContainer">
                <div>
                    <span className="productPrice">SIZE </span>
                    <span className="productSubName">L</span>
                </div>
                <div>
                    <span className="linkDecoration">SIZE_GUIDE</span>
                </div>
            </div>
            <div className="productSizesAvailable">
                {productSizes.map((size, index) => (
                    <div
                        key={size}
                        className={
                            index == 2
                                ? "productSize productSizeUnavailable"
                                : index == 3
                                ? "productSize productSizeSelected"
                                : "productSize"
                        }
                    >
                        {size}
                    </div>
                ))}
            </div>
            <div className="addToBagButton">{"add to bag -->"}</div>
            <div className="productOffers">
                Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
            </div>
            <div className="productHelpChat">
                <div className="productOffers">
                    Speak to a Personal Stylist{" "}
                    <span className="linkDecoration">CHAT NOW</span>
                </div>
            </div>
        </div>
    );
}
