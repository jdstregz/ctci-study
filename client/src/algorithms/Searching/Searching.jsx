import React, {useEffect, useState} from 'react';

import {root} from "../../data-structures/Trees/Trees";

export const DFS = () => {
    const [answer, setAnswer] = useState('');
    useEffect(() => {
        const newAnswer = [];
        const dfs = (node) => {
            if (node == null) {
                return;
            }
            newAnswer.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }
        dfs(root);
        setAnswer(newAnswer.join(', '))
    }, [])
    return (
        <p>{answer}</p>
    )
}

export const BFS = () => {
    const [answer, setAnswer] = useState('');
    useEffect(() => {
        const newAnswer = [];
        const queue = [root];
        while(queue.length > 0) {
            const node = queue.shift();
            if (node) {
                newAnswer.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        setAnswer(newAnswer.join(', '))
    });

    return (
        <p>{answer}</p>
    )
}