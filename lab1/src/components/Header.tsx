import { useState } from "react";
import './Header.css';

interface Props {
    user:string;
}

function Header({user}:Props) {
return (
    <div className="Header">
            <header><h1>Ice Cream Wars</h1><span>Welcome {user}</span></header>
    </div>
)
}

export default Header;