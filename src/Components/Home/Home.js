import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Home = () => {
    const quizzes = useLoaderData()
    const data = quizzes.data
    // console.log(quizzes.data);
    return (
        <div className='mx-5'>
            <h1>Here is home section : {data.length}</h1>
            <Row xs={1} md={2} lg={4} className="g-2">
            {
             data.map(quiz=> <QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>)
            }
        </Row>
        </div>
    );
};

export default Home;