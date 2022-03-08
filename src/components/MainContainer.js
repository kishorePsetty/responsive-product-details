import React from "react";
import Content from "./Content";
import Header from "./Header";

export default function Container(props) {
    return (
        <div className="container">
            <Header />
            <Content />
        </div>
    )
}