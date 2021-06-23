import {useCounter} from '../Context/CounterContext'
import '../App.css'
function MyCounter() {
  const {Count  , increaseCount , decreaseCount} = useCounter()

    
    return (
        <div>
            <h3>Counter Component</h3>
            <h2>Count is : {Count}</h2>
            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseCount}>Decrease Count</button>

        </div>
    )
}

export default MyCounter
