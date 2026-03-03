// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NFTForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NFTForge/i);
    expect(titleElement).toBeInTheDocument();
});
