import React, { useEffect, useRef, useState } from 'react';
import { CheckItem } from './checkItem';
import { Check } from '.';
import { checksList } from './style.module.css';

interface Props {
}

export function CheckList({ }: Props) {
    const checkData: Check[] = [
        { id: "1", action: "Check 1", host: "host1", scheduledAt: "2021-01-01", successRate: 0.95, status: "success" },
        { id: "2", action: "Check 2", host: "host2", scheduledAt: "2021-01-02", successRate: 0.89, status: "failure" },
        { id: "3", action: "Check 3", host: "host3", scheduledAt: "2021-01-03", successRate: 0.93, status: "success" },
        { id: "4", action: "Check 4", host: "host4", scheduledAt: "2021-01-04", successRate: 1.0, status: "failure" },
        { id: "5", action: "Check 5", host: "host5", scheduledAt: "2021-01-05", successRate: 1.0, status: "success" },
        { id: "6", action: "Check 6", host: "host6", scheduledAt: "2021-01-06", successRate: 0.55, status: "failure" },
        { id: "7", action: "Check 7", host: "host7", scheduledAt: "2021-01-07", successRate: 0.98, status: "success" },
        { id: "8", action: "Check 8", host: "host8", scheduledAt: "2021-01-08", successRate: 0.94, status: "failure" },
        { id: "9", action: "Check 9", host: "host9", scheduledAt: "2021-01-09", successRate: 0.0, status: "success" },
        { id: "10", action: "Check 10", host: "host10", scheduledAt: "2021-01-10", successRate: 1.0, status: "failure" },
    ]

    const checks = checkData.map((check) => <CheckItem key={check.id} check={check} />);

    return <div className={checksList}>
        {checks}
    </div>
}