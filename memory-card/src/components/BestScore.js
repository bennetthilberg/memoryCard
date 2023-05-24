import React, {useState,useEffect} from 'react';

export default function BestScore({pastScores}){
    let bestSoFar = 0;
    for(const score of pastScores){
        if(score > bestSoFar){
            bestSoFar = score;
        }
    }
    return(
        <div id="bestScore">
            <p>Best: {bestSoFar}</p>
        </div>
    );
}