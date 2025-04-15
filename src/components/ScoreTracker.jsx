import React from "react";

const ScoreTracker = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>Score: {props.score}</h2>
        </div>
    )
}
export default ScoreTracker;