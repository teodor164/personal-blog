import {useCallback, useState} from "react";
import classes from './Counter.module.scss'

export const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = useCallback(() => {
        setCount(count + 1)
    }, [count])

    const decrement = useCallback(() => {
        setCount(count - 1)
    }, [count])

    return <div >
        <div>{count}</div>
        <button className={classes.btn} onClick={increment}>increment</button>
        <button className={classes.btn} onClick={decrement}>decrement</button>
    </div>
}
