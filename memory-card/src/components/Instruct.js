import React, {useState,useEffect} from 'react';
export default function Instruct(){
    const[hidden,setHidden] = useState(false);
    function toggleHidden(){
        setHidden(prevHidden => !prevHidden);
    }
    return(
        <>
        {hidden ? null : (
            <div id="instruct">
                <div id="instructContent">
                    <p>Click on the letters to get points, but remember which letters you've clicked, if you click a letter more than once, you lose!</p>
                    <button onClick={toggleHidden}>Ok, lets go</button>
                </div>
            </div>
        )}
        </>
    );
}