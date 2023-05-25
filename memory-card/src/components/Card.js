import { getDefaultNormalizer } from '@testing-library/react';
import React, {useEffect,useState} from 'react';

export default function Card({letter, handlePick}){
    return(
        <div className="card" onClick={() => handlePick(letter)}>
            <p>{letter}</p>
        </div>
    )
}