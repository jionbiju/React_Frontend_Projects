import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from '../../Assets/data'
const Quiz = () => {
    let [index,setIndex] = useState(0);
    let [content,setContent] = useState(data[index]);
    let [lock,setLock] = useState(false);
    let [score,setScore] = useState(0);
    let [result,setResult] = useState(false);

    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);

    let option_array = [option1,option2,option3,option4];

    const reset=()=>{
        setContent(data[0]);
        setIndex(0);
        setLock(false);
        setResult(false);
        setScore(0);
    }

    const next = () => {
        if(lock === true){
            if(index === data.length-1){
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setContent(data[index]);
            setLock(false);
            option_array.map((option)=>{
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }

    const ansCheck =(e,ans)=>{
        if(lock === false){
            if(content.ans === ans){
                e.target.classList.add("correct");
                setLock(true);
                setScore(++score);
            }
            else{
                e.target.classList.add("wrong");
                setLock(true);
                option_array[content.ans-1].current.classList.add("correct");
            }
        }
    }

  return (
    <div className='container'>
        <div className="header">
            <div className="title"> Quiz App</div>
            <div className="underline"></div>
        </div>
        {result?<></>:
            <>
            <div className="question">
            <h2>{index+1}.{content.question}?</h2>
        </div>
        <div className="options">
            <ul>
                <li ref={option1} onClick={(e)=>{ansCheck(e,1)}}>{content.option1}</li>
                <li ref={option2} onClick={(e)=>{ansCheck(e,2)}}>{content.option2}</li>
                <li ref={option3} onClick={(e)=>{ansCheck(e,3)}}>{content.option3}</li>
                <li ref={option4} onClick={(e)=>{ansCheck(e,4)}}>{content.option4}</li>
            </ul>
        </div>
        <div className="next-btn" onClick={next}>Next</div>
        <div className="index">{index+1} of {data.length} questions</div>
        </>
        }
        {result?<div className="result">
            <h2>You have scored {score} out of {data.length}</h2>
            <div onClick={reset} className="next-btn">Reset</div>
        </div>:<></>}
    </div>
  )
}

export default Quiz
