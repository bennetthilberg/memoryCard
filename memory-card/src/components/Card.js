import { getDefaultNormalizer } from '@testing-library/react';
import React, {useEffect,useState} from 'react';

export default function Card({letter}){
    return(
        <div className="card">
            <p>{letter}</p>
        </div>
    )
}