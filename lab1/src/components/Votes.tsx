import {useState} from 'react';
import './Votes.css';

function Votes() {
    const [chocolateVotes,setChocolateVotes] = useState<number>(0);
    const [vanillaVotes,setVanillaVotes] = useState<number>(0);
    const [strawberryVotes,setStrawberryVotes] = useState<number>(0);
    const [showChocolate,setShowChocolate] = useState(false);
    const [showVanilla,setShowVanilla] = useState(false);
    const [showStrawberry,setShowStrawberry] = useState(false);

    let totalVotes = chocolateVotes + vanillaVotes + strawberryVotes;

    let percentChocolate = Math.round((chocolateVotes/totalVotes)*100);
    let percentVanilla = Math.round((vanillaVotes/totalVotes)*100);
    let percentStrawberry = Math.round((strawberryVotes/totalVotes)*100);

    let chocolateWidth = {
        width: percentChocolate + "%"
    }

    let vanillaWidth = {
        width: percentVanilla + "%"
    }

    let strawberryWidth = {
        width: percentStrawberry + "%"
    }
    
    return (
        <div className='Votes'>
            <h1>Vote Here</h1>
            <div>
            <button onClick={()=>{
                setChocolateVotes(chocolateVotes=>chocolateVotes+1);
                setShowChocolate(true);}}>
                    Chocolate</button>
            <button onClick={()=>{
                setVanillaVotes(vanillaVotes=>vanillaVotes+1);
                setShowVanilla(true);}}>
                    Vanilla</button>
            <button onClick={()=>{
                setStrawberryVotes(strawberryVotes=>strawberryVotes+1);
                setShowStrawberry(true);}}>
                    Strawberry</button>
            </div>
            <div>
                {totalVotes && <span>No votes yet.</span>}
                {showChocolate &&
                <span>
                    <div>Chocolate: {chocolateVotes} ({percentChocolate}%)</div>
                    <div className='chocolateContainer'>
                        <div className='chocolateBar' style={chocolateWidth}></div>
                    </div>
                </span>
                }
                {showVanilla &&
                <span>
                    <div>Vanilla: {vanillaVotes} ({percentVanilla}%)</div>
                    <div className='vanillaContainer'>
                        <div className='vanillaBar' style={vanillaWidth}></div>
                    </div>
                </span>
                }
                {showStrawberry &&
                <span>
                    <div>Strawbery: {strawberryVotes} ({percentStrawberry}%)</div>
                    <div className='strawberryContainer'>
                        <div className='strawberryBar' style={strawberryWidth}></div>
                    </div>
                </span>
                }
            </div>
        </div>
    )
}

export default Votes;