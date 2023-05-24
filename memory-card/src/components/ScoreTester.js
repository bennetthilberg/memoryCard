import React, {useState,useEffect} from 'react';

export default function ScoreTester({setScore, oldScores}){
    function handleS(e){
        e.preventDefault();
        let out = oldScores.push(val);
        setScore(out);
    }
    let val;
    function handleC(e){
        e.preventDefault();
        val = e.target.value;
    }
    return(
        <form action="" onSubmit={handleS}>
            <input type="text" onChange={handleC}/>
            <button type="submit">Sub</button>
        </form>
    );
}