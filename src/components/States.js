import React, {useState} from 'react'

const About = () => {

    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(count + 1);
    }

    const countDown = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <button onClick={countUp}>countUp</button>
            <button onClick={countDown}>countDown</button>
            <p>{count}</p>          
        </div>
    )
}

export default About
