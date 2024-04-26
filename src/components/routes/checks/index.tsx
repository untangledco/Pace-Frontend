import React, { useEffect, useRef, useState } from 'react';
import { CheckList } from './checklist';
import { checksPage } from './style.module.css';

export interface Check {
    id: string;
    action: string;
    host: string;
    scheduledAt: string;
    successRate: number;
    status: string;
}

interface Props {
}

export function ChecksRoute({ }: Props) {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className={checksPage}>
            <h1>Checks</h1>
            <CheckList />
        </div>
    );
}