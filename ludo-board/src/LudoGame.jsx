import { useState } from "react";
export default function LudoGame(){
let[moves, setMoves] = useState({blue:0, red:0,green:0,yellow:0})
let  updatedBlue =()=> {
    setMoves((prevMoves)=>{
        return({
            ...prevMoves, blue:prevMoves.blue+1
        });
    });
};
let  updatedRed =()=> {
    setMoves((prevMoves)=>{
        return({
            ...prevMoves, red:prevMoves.red+1
        });
    });
};
let  updatedGreen =()=> {
    setMoves((prevMoves)=>{
        return({
            ...prevMoves, green:prevMoves.green+1
        });
    });
};
let  updatedYellow =()=> {
    setMoves((prevMoves)=>{
        return({
            ...prevMoves, yellow:prevMoves.yellow+1
        });
    });
};


    return (
        <>
    <p>Blue Moves ={moves.blue}</p>   
    <button style ={{backgroundColor:"blue"}} onClick={updatedBlue}>+1</button>

    <p>Red Moves ={moves.red}</p>   
    <button style ={{backgroundColor:"red"}}  onClick={updatedRed}>+1</button>

    <p>Green Moves ={moves.green} </p>   
    <button style ={{backgroundColor:"green"}} onClick={updatedGreen}>+1</button>

    <p> Yellow Moves ={moves.yellow}</p>   
    <button style ={{backgroundColor:"yellow"}}  onClick={updatedYellow}>+1</button>
    
        </>
    )
}
