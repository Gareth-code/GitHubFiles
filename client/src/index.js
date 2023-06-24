import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log(process.env.REACT_APP_API_URL)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />,
    document.getElementById("root")
);

