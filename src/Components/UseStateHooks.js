import {useState} from 'react'

function UseStateHooks() {

    const [count, setCount] = useState(4)
    const [theme, setTheme] = useState('blue')

    function decrementCount(){
    setCount(prevCount => prevCount-1)
    }

    function incrementCount(){
    setCount(prevCount => prevCount+1)
    setTheme('red')
    }

    return (
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default UseStateHooks
