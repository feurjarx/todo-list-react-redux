import React from 'react';

let Todo = (props) => (
    <div className="space-between full-width">
        <div className={props.completed ? 'completed' : ''}>
            <span>{props.title}</span>
            <small> "{props.id}"</small>
        </div>
        <div>
            {props.children}
        </div>
    </div>
);

export {
    Todo
};