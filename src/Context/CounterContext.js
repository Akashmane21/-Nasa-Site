import { useState , createContext ,useContext } from "react";

 const CounterContext = createContext()
 export const  useCounter =() => useContext(CounterContext)
function CounterContextProider(props){

    const [Count, setCount] = useState(0)

    function increaseCount(){
        setCount(Count + 1)
    }

    function decreaseCount(){
        setCount(Count - 1)
    }


const value={Count,setCount,increaseCount,decreaseCount}

    return(
        <CounterContext.Provider value={value}>
            {props.children}
        </CounterContext.Provider>

    )

}

export default CounterContextProider;