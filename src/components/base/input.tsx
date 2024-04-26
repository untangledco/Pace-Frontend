import React from 'react';
import { input } from './input.module.css';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export function Input({ value, onChange }: Props) {
    return (
        <input className={input} value={value} onChange={(e) => onChange(e.target.value)} />
    );
}