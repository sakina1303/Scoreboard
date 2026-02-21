import React from "react";

const ScoreTracker = ({ score }) => {
    return (
        <div className="score-tracker" aria-live="polite">
            <h2>Score</h2>
            <p className="score-value">{score}</p>
        </div>
    );
};

export default ScoreTracker;