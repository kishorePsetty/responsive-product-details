import { SvgIcon } from "@mui/material";
import React from "react";
import { ReactComponent as Search } from "../assets/images/Search.svg";
import { ReactComponent as Bag } from "../assets/images/Bag.svg";
import { ReactComponent as Account } from "../assets/images/Account.svg";

export default function Header(props) {
    const headerLinks = [
        "The Edit",
        "New Arrivals",
        "Designers",
        "Clothing",
        "Shoes",
        "Bags",
        "Accessories",
        "Jewelry",
        "Beauty",
        "home",
    ];

    return (
        <div className="header">
            <div className="logo">MY COMPANY.COM</div>
            <div className="headerLinks">
                {headerLinks.map((link) => (
                    <div className="headerLink" key={link}>{link}</div>
                ))}
            </div>
            <div className="headerShortcuts">
                <div className="headerShortcutIcon">
                    <SvgIcon component={Search} />
                </div>
                <div className="headerShortcutIcon">
                    <SvgIcon component={Bag} />
                </div>
                <div className="headerShortcutIcon">
                    <SvgIcon component={Account} />
                </div>
            </div>
        </div>
    );
}
