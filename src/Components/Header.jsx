import {React, useState} from "react";
import Navbar from "./Navbar";

function Header (){

    const [chosenTab, setChosenTab] = useState(0);

    function changeTab(tabNo){
      setChosenTab(tabNo);
    };

    return (
        <header>
            <h1>Anne Arhipoff</h1>
            <Navbar changeTab={changeTab}/>
        </header>);
}

export default Header;