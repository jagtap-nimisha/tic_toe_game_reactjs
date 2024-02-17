import React, { useState } from 'react'
import Practic_squarepages from './Practic_squarepages'

const Practic_boxpages = () => {
    const [khali,setkhali]=useState(Array(9).fill(null));
    console.log("khali null value",khali)
// true rahega to x ki turn he yaha
    const [isTrue,setisTrue]=useState(true);
    // when the user clicked on perticular index no. for example arr[1] 1 is a index no.
// track the block (kis indexs me user ne clicked kiya)
// har index pr event listener lga diya he
    const handleclicked=(index)=>{
// console.log("this is the index no",index)
// bugg
if(khali[index] !== null){
    return;
}
// logic x ki turn he ya y ki
// copy khali box
// ... speade oprators
const copystate=[...khali];
copystate[index] = isTrue ? "X" : "O" ; 
// copy state ke ander new sate rakh di he
setkhali(copystate);
setisTrue(!isTrue);
    }
    // winner logic here
    const check___winner=()=>{
        const winner=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let logic of winner){
            
            // desceuringsk
            const [a,b,c] =logic;
            if(khali[a] !== null && khali[a]==khali[b] && khali[a]==khali[c]){
                return khali[a];
            }
        }
        return false;
    }
//jab bhi puri value rerender hogi to some one is worn jesei value true hongi  so winners some ones is
    const konwinnerhe = check___winner();
    ///play agein
    const resethandle=()=>{
        setkhali(Array(9).fill(null))
    }
  return (
    <div>
       {konwinnerhe ? <>{konwinnerhe} won the games 
       <button onClick={resethandle}>Play again</button>
       </> : <>
       <h2>player {isTrue ? "X" : "0"} move</h2>
       <div className='bog_boxxx'>
            <div className='roww11'>
                <Practic_squarepages onClick={()=>{handleclicked(0)}} value={khali[0]}/>
                 {/* onClick={()=>console.log("first") */}
                <Practic_squarepages  onClick={()=>handleclicked(1)} value={khali[1]}/>
                <Practic_squarepages  onClick={()=>{handleclicked(2)}} value={khali[2]}/>
            </div>
            <div className='roww11'>
                <Practic_squarepages onClick={()=>{handleclicked(3)}} value={khali[3]}/>
                <Practic_squarepages onClick={()=>{handleclicked(4)}} value={khali[4]}/>
                <Practic_squarepages onClick={()=>{handleclicked(5)}} value={khali[5]}/>
            </div>
            <div className='roww11'>
                <Practic_squarepages onClick={()=>{handleclicked(6)}} value={khali[6]}/>
                <Practic_squarepages onClick={()=>{handleclicked(7)}} value={khali[7]}/>
                <Practic_squarepages onClick={()=>{handleclicked(8)}} value={khali[8]}/>
            </div>
        </div>
        </>
        }
    </div>
  )
}

export default Practic_boxpages