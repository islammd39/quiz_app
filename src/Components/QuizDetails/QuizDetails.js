import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

const QuizDetails = ({quiz}) => {
    const {id,logo}=quiz
    // console.log(quiz.questions);
    const navigate = useNavigate()
    const clickHandle=()=>{
        navigate(`/quiz/${id}`)
    }
    return (
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img className='bg-secondary' variant="top" src={logo} />
        <Card.Body>
        <Button onClick={clickHandle} variant="primary">Go Quiz</Button>
        </Card.Body>
        </Card>
        </Col>
    );
};

export default QuizDetails;