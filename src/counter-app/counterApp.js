import {useStatus} from 'react'
export default function CounterApp(){
    //let count = 0;
    const [data, setData] = useStatus(0)
    function increase(){
        setData(data + 1)
    }
    return(
        <div className = "counterApp">
        <h1>counter app</h1>
        <h1>{data}</h1>
        <button onClick={increase}>increase</button>
        </div>
    );
}