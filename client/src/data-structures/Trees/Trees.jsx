import React from 'react'
import PropTypes from 'prop-types'
import tree from '../../assets/1200px-Binary_search_tree.svg.png';

export const Tree = () => {
    return (
        <div style={{backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src={tree} alt={"Binary search tree"} style={{width: '100%', maxWidth: 400}}/>
        </div>
    )
};

const one = {
    val: 1
};

const four = {
    val: 4
};

const seven = {
    val: 7
};

const six = {
    val: 6,
    left: four,
    right: seven,
};

const three = {
    val: 3,
    left: one,
    right: six,
};

const thirteen = {
    val: 13,
};

const fourteen = {
    val: 14,
    left: thirteen,
};

const ten = {
    val: 10,
    right: fourteen,
};

const root = {
    val: 8,
    left: three,
    right: ten,
};


export const InOrderTraversal = () => {
    const [answer, setAnswer] = React.useState('');

    React.useEffect(() => {
        let newAnswer = [];
        const inOrderTraversalFunction = (node) => {
            if (node) {
                inOrderTraversalFunction(node.left);
                newAnswer.push(node.val);
                inOrderTraversalFunction(node.right);
            }
        }
        inOrderTraversalFunction(root);
        setAnswer(newAnswer.join(', '))
    }, []);

    return (<p>{answer}</p>)
};


export const PreOrderTraversal = () => {
    const [answer, setAnswer] = React.useState('');

    React.useEffect(() => {
        let newAnswer = [];
        const preOrderTraversalFunction = (node) => {
            if (node) {
                newAnswer.push(node.val);
                preOrderTraversalFunction(node.left);
                preOrderTraversalFunction(node.right);
            }
        }
        preOrderTraversalFunction(root);
        setAnswer(newAnswer.join(', '));
    }, []);
    return (<p>{answer}</p>)
};
