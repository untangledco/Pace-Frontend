import React, { useState } from 'react';
import { bar, barContent } from './style.module.css';
import { Search } from './search';

interface Props {
}

export function TopBar({ }: Props) {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className={bar}>
            <div className={barContent}>
                <Search onChange={setSearchQuery} value={searchQuery} />
            </div>
        </div>
    );
}