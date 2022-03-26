import { useState, useEffect, memo } from "react"


function Content({onIncrease}) {

    console.log('re-render');

    return (
        <div>
            <h1>
                Content
                <br/>
                <button onClick={onIncrease}>Increase</button>
            </h1>
        </div>
    )
}

export default memo(Content)