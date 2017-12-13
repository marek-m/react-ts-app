// src/components/Hello.tsx

import * as React from 'react';
import './Hello.css';
import TextComponent from './Text';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    repos: Array<string>;
    onIncrement: () => void;
    onDecrement: () => void;
    getRepos: () => void;
}

function Hello({ name, enthusiasmLevel = 1, repos, onDecrement, onIncrement, getRepos }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div className="hello">
            <TextComponent repos={repos} clickText={ ()=> {} }/>
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
                <button onClick={getRepos}>fetch</button>
            </div>
        </div>
    );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
