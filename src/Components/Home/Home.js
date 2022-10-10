import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Home = () => {
    const quizzes = useLoaderData()
    const data = quizzes.data
    // console.log(quizzes.data);
    return (
        <div>
            <h1>Here is home section : {data.length}</h1>
            {
             data.map(quiz=> <QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>)
            }
        </div>
    );
};

export default Home;