import React, { useEffect, useRef, useState } from 'react';
import { Check } from '.';
import { checkItem } from './style.module.css';

interface Props {
    check: Check;
}

export function CheckItem({ check }: Props) {
    return (
        <>
            <div>{check.action}</div>
            <div>{check.host}</div>
            <div>{check.status}</div>
            <div>{check.scheduledAt}</div>
            <div>{check.successRate}</div>
        </>
    );
}