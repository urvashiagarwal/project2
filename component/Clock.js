import { useEffect, useState } from "react";

const Clock = () => {
    const [time, newTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        setInterval(() => {
            newTime(new Date().toLocaleTimeString())
        },1000)
    
      
    }, [time])
    
        return (
        <>
            <div style={{ height:"50px", fontSize:"60px", fontWeight:"bold", textAlign:"center", padding:"150px"}}>
                {time}
            </div>
        </>
    )
}

export default Clock;