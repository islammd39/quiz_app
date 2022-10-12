import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import FrontPage from '../Header/FrontPage/FrontPage';
import QuizDetails from '../QuizDetails/QuizDetails';

const Home = () => {
    const quizzes = useLoaderData()
    const data = quizzes.data
    // console.log(quizzes.data);
    return (
       <div className='mb-5'>
        <FrontPage></FrontPage>
         <div className='mx-5'>
            <div className='py-2'>
            <h5>Let,s started: {data.length} practice on this topics</h5>
            </div>
        <Row xs={1} md={2} lg={4} className="g-2">
            {
             data.map(quiz=> <QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>)
            }
        </Row>
        </div>
       </div>
    );
};

export default Home;