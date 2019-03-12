import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const Quote = () => (
    <h1>Quote Machine</h1>
)

const rootDiv = document.getElementById('root');

ReactDOM.render(<Quote />, rootDiv);