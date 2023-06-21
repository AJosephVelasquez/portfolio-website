import React from "react";
import { stats } from "../data";

function Stats(){
    return(
        <>
            {stats.map(({no, description}, index) => {
                return (
                    <div className="stats-box" key={index}>
                        <h3 className="stats-no">{no}</h3>
                        <span className="stats-description">{description}</span>
                    </div>
                )
            })}
        </>
    )
}

export default Stats;