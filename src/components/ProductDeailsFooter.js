import React from "react";

export default function ProductDeailsFooter() {
    return (
        <div className="footerContent">
            <div className="relatedProductLinks">
                <div className="linkDecoration">JONATHAN SIMKHAI</div>
                <div className="linkDecoration">BLAZERS</div>
                <div className="linkDecoration">VISCOSE</div>
            </div>
            <div className="editorsNote">a note from the editor</div>
            <div className="editorsNoteDescription">
                The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
                lunar lavishness by night and by day: a blazer in a linen blend
                shot with lurex for a shimmering surface that shines like a star
                in the sky.
            </div>
            <div className="editorSignature">
                ---- By <span className="linkDecoration">MINNA SHIM</span>,
                Fashion Editor
            </div>
        </div>
    );
}
