import React, {useState,useEffect} from 'react';

export default function ScoreTester({setScore, oldScores}){
    const [val, setVal] = useState('');
    function handleS(e){
        e.preventDefault();
        let out = [...oldScores, val]
        setScore(out);
    }
    function handleC(e){
        e.preventDefault();
        setVal(e.target.value);
    }
    return(
        <form action="" onSubmit={handleS}>
            <input type="text" onChange={handleC}/>
            <button type="submit">Sub</button>
        </form>
    );
}