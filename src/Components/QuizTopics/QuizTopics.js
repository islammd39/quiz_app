import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const QuizTopics = () => {
    const quizTopic = useLoaderData()
    const quizzes = quizTopic.data.questions
    // console.log(quizTopic.data.questions);
    return (
        <div>
            <h4>Topic on quiz : {quizTopic.data.questions.length}</h4>
       <Container>
       <Row>
           { 
                quizzes.map(quiz=> <Topics key={quiz.id} quiz={quiz}></Topics>)
            }
        </Row>
       </Container>
        </div>
    );
};

export default QuizTopics;