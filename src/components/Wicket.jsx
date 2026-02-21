import React from "react";

const Wicket = ({ wickets }) => {
    return (
        <div className="wicket" aria-live="polite">
            <h2>Wickets</h2>
            <p>{wickets}</p>
        </div>
    );
};

export default Wicket;
