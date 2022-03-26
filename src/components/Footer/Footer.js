import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

        <div className='footer'>
           <div className="footer-text">
            <h2 className='h2'>How React Works</h2>
            <p className='text-p'>ReactJS is simply a JavaScript library for building user interfaces.It designs simple views for each state in your application.React will efficiently update and render just the right component when your data changes.A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML.The declarative view makes your code more predictable and easier to debug. React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it.</p>
           </div>
           <div className="footer-text">
            <h2 className='h2'>Props vs State</h2>
            <p className='text-p'>
                <p>Props</p>
                <li>Props get passed in form parent</li>
                <li>Immutable</li>
                <li>Inputs that describe what we should see</li>
                <li>Can be default and Validated</li>
                <p>State</p>
                <li>Created within component</li>
                <li>Mutable</li>
                <li>Can be private or public to its child</li>
                <li>Can only be passed as props</li>
            </p>
           </div>
           <div className="footer-text">
            <h2 className='h2'>How useState Works</h2>
            <p className='text-p'>
            Syntax of useState hook is:<span className='span'>const [count, setCount] = useState([]);</span> We have had declare our states with initial values,and that is passed as defaultValue to useState().The second function which we return is the setValue() function responsible for updating the state with the newValue being passed during call and then re-rendering the component to update the actual DOM.Once setValue function is executed, we assign the state array to a variable tuple and return it to the caller where the variable is re-initialised with the new value.In this way step by step useState()Hook create and work.

            </p>
           </div>
        </div>
    );
};

export default Footer;