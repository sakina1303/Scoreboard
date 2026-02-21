import React from 'react';

const ScoreBoardHeader = ({ title }) => {
    return (
        <header className="header card" role="banner">
            <h1>{title}</h1>
        </header>
    );
};

export default ScoreBoardHeader;