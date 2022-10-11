import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizTopics = () => {
    const quizTopic = useLoaderData()
    const {options,question}=quizTopic.data.questions[0]
    console.log(quizTopic.data.questions[0]);
    return (
        <div>
            <h4>This quiz to : {question}</h4>
            <p>Option : {options}</p>
        </div>
    );
};

export default QuizTopics;