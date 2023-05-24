import React, {useState,useEffect} from 'react';

export default function CurScore({score}){
    return(
        <div id="curScore">
            <p>Score: {score}</p>
        </div>
    );
}