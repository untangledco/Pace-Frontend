import React, { useEffect, useRef } from 'react';
import { search, slash, searchButton } from './style.module.css';

interface Props {
    onChange: (value: string) => void;
    value: string;
}

export function Search({ onChange, value }: Props) {
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === '/') {
                e.preventDefault();
                ref.current?.focus();
                ref.current?.select();
            }
        }
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    //TODO maybe just remove the button wrapping the SVG
    return (
        <div className={search}>
            <button className={slash} onClick={() => ref.current?.focus()}>/</button>
            <input ref={ref} type="search" placeholder='Search checks' onChange={e => onChange(e.currentTarget.value)} value={value} />
            <button className={searchButton}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>
        </div>
    );
}