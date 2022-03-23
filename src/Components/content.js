import { useState, useEffect } from "react"


function Content() {

    const[countdown, setCountdown] = useState(180)

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)

        return () => clearInterval(timerId)

    },[])

    return (
        <div>
            <h1>
                {countdown}
            </h1>
        </div>
    )
}

export default Content