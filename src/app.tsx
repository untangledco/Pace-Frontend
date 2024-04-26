import React from 'react';
import { createRoot } from 'react-dom/client';
import "./app.css";
import { TopBar } from './components/top-bar';
import { ChecksRoute } from './components/routes/checks';

function MyButton({ title }: { title: string }) {
    const [value, setValue] = React.useState(0);
    const increment = () => setValue(value + 1);

    return (
        <button onClick={increment}>{title} {value}</button>
    );
}

export default function App() {
    const [value, setValue] = React.useState('Hello');

    return (
        <>
            <TopBar />
            <ChecksRoute />
        </>
    );
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />);