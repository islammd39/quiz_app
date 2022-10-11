import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <blockquote>
            <h5>What is the purpose of using react router ?</h5>
            <p>It allows the creation of single-page web or mobile apps that allows navigation without the page refreshing. React Router also gives us access to browser history features while maintaining the correct view of the application. React Router uses a component-based approach to routing.</p>
            <h5>what does context api work ?</h5>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            <h5>what is useRef in react?</h5>
            <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current. When the button is clicked, handle function is invoked and the reference value is incremented: countRef.current++. The reference value is logged to the console.Updating the reference value countRef.current++ doesn't trigger component re-rendering. This is demonstrated by the fact that 'I rendered!' is logged to the console just once, at initial rendering, and no re-rendering happens when the reference is updated.</p>
            
            </blockquote>
        </Container>
    );
};

export default Blog;