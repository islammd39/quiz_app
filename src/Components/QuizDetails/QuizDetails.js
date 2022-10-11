import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const QuizDetails = ({quiz}) => {
    const {logo}=quiz
    console.log(quiz);
    return (
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img className='bg-primary' variant="top" src={logo} />
        <Card.Body>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </Col>
    );
};

export default QuizDetails;