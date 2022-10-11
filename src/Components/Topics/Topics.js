import React from 'react';
import { Button, Col} from 'react-bootstrap';

const Topics = ({quiz}) => {
    // console.log(quiz.correctAnswer);
    const {question,correctAnswer}=quiz
    const quizOptions = quiz.options
    const handler=value=>{
        if(value===correctAnswer){

            console.log('click');
        }else{
            console.log('dont click');
        }
    }

    return (
       <div>
         <Col lg={12} className='my-5 py-5 bg-warning'>
            <h5>{question}</h5>
            <p>{quizOptions.option}</p>
        </Col>
        {
            quizOptions.map(option=> <p key={option}><Button onClick={()=>handler(option)}><input type="radio" name="avc"/>{option}</Button></p>)
        }
       </div>
    );
};

export default Topics;