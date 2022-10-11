import React from 'react';
import { Col} from 'react-bootstrap';

const Topics = ({quiz}) => {
    console.log(quiz.options);

    return (
        <Col lg={12}>
            <h3>{quiz.question}</h3>
        </Col>
    );
};

export default Topics;