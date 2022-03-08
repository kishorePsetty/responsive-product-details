import React from "react";

export default function LeftContent() {
    const productLinks = ["details", "delivery", "fit", "share"];
    return (
        <div className="left">
            <div className="productLinks">
                {productLinks.map((link, index) => (
                    <div
                        key={link}
                        className={
                            !index
                                ? "productLink productLinkActive"
                                : "productLink"
                        }
                    >
                        {link}
                    </div>
                ))}
            </div>
            <div className="productDetails">
                <div>
                    The Forte Lurex Linen Viscose Jacket in Mother of Pearl
                    features lunar lavishness by night and by day: a blazer in a
                    linen blend shot with lurex for a shimmering surface that
                    shines like a star in the sky. it has a straight fit with
                    well defined shoulders and a shawl collar culminating in a
                    button and has been flawlessly finished with three jet
                    pockets with a sartorial feel.
                </div>
                <div className="productEditorNoteLink">
                    See the{" "}
                    <span className="linkDecoration">EDITOR’S NOTE</span>
                </div>
                <div className="productDesignerLink">
                    Learn about the{" "}
                    <span className="linkDecoration">DESIGNER</span>
                </div>
            </div>
        </div>
    );
}
