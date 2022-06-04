import React from 'react';
import { createRoot } from 'react-dom/client'; // new syntax of React
import './index.css';
import App from './App';

const container = document.getElementById('root'); // new syntax of React
const app = createRoot(container);
app.render(<App />);

