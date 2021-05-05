import React, {useEffect, useState} from 'react';

const fibonacci1 = (i) => {
    if (i === 0) {
        return 0;
    }
    if (i === 1) {
        return 1;
    }
    return fibonacci1(i - 1) + fibonacci1(i - 2);
}

const fibonacci2 = (n) => {
    const memo = {};
    const recursiveFib = (i) => {
        if (i === 0 || i === 1) {
            return i;
        }
        if (memo[i] == null) {
            memo[i] = recursiveFib(i - 1) + recursiveFib(i - 2);
        }
        return memo[i];
    }
    return recursiveFib(n);
}

export const Fibonacci = () => {
    const [time1, setTime1] = useState(0);
    const [time2, setTime2] = useState(0);
    const [answer1, setAnswer1] = useState(null);
    const [answer2, setAnswer2] = useState(null);

    useEffect(() => {
        const now = Date.now();
        let answer = fibonacci1(41);
        const then = Date.now();
        setTime1(then - now);
        const now2 = Date.now();
        let answer2 = fibonacci2(41);
        const then2 = Date.now();
        setTime2(then2 - now2);
        setAnswer1(answer)
        setAnswer2(answer2);
    }, [])

    return (
        <>
            <p>Recursive Answer: {answer1}</p>
            <p>Dynamic Answer: {answer2}</p>
            <p>Recursive Time: {time1.toPrecision()}</p>
            <p>Dynamic Time: {time2}</p>
        </>
    )
}