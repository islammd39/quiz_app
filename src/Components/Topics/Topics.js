import React from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import './Topics.css'


const Topics = ({quiz}) => {
    // console.log(quiz.correctAnswer);
    const {question,correctAnswer}=quiz
    const uq = question.slice(3,-4)
    const quizOptions = quiz.options
    const handler=value=>{
        if(value===correctAnswer){
            toast('Yes it`s Correct Answer')
        }else{
            toast('No it`s Incorrect Answer')
        }
    };
    const icoHandler=()=>{
        toast(correctAnswer)
    }

    return (
       <div className=''>
         <div className='option-section my-5 py-5 bg-warning'>
          <div className='d-flex justify-content-md-center'>
          <h5>{uq}</h5>
         <FontAwesomeIcon onClick={icoHandler} className='ms-5 ic' icon={faEye} size={'xl'}/>
          </div>
            <p>{quizOptions.option}</p>
     
        <div>
        {
            quizOptions.map(option=> <p key={option}><Button className='btn-option' variant="light" size="lg" onClick={()=>handler(option)}><input type="radio" name="avc"/>{option}</Button></p>)
        }
        </div>
           </div>
         <ToastContainer />
       </div>
    );
};

export default Topics;