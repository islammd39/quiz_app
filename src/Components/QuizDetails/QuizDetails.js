import React from 'react';

const QuizDetails = ({quiz}) => {
    const {logo}=quiz
    return (
        <div>
            <img src={logo} alt=".." />
        </div>
    );
};

export default QuizDetails;