import { useState } from "react";
import './AdDesigner.css';

function AdDesigner() {
    const [flavor,setFlavor] = useState("Vanilla");
    const [lightTheme,setTheme] = useState(true);
    let themeClass ='';
    if(lightTheme === false) {
        themeClass = ' darkTheme';
    }
    const [fontSize,setFontSize] =useState(24);
    const styles = {
        fontSize: fontSize + "px"
    }
    return (
        <div className="AdDesigner">
            <h1>Ad Designer</h1>
            <div className={"ad-div" + themeClass}>
                <p>Vote for</p>
                <p style={styles}>{flavor}</p>
            </div>
            <h4>What to Support</h4>

                <button disabled={flavor==="Vanilla"} onClick={() => setFlavor("Vanilla")}>Vanilla</button>
                <button disabled={flavor==="Chocolate"}onClick={() => setFlavor("Chocolate")}>Chocolate</button>
                <button disabled={flavor==="Strawberry"}onClick={()=> setFlavor("Strawberry")}>Strawberry</button>
        
            <h4>Color Theme</h4>
                <button disabled={lightTheme}onClick={() => setTheme(true)}>Light</button>
                <button disabled={lightTheme===false}onClick={() => setTheme(false)}>Dark</button>

            <h4>Font Size</h4>
                <button onClick={() =>setFontSize(fontSize-1)}>Down</button>{fontSize}
                <button onClick={() => setFontSize(fontSize+1)}>Up</button>
            
        </div>
    )
}

export default AdDesigner;
