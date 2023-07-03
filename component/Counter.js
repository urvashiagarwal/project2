import { useState } from "react";


const Counter = () => {
    const [initialState, updatesState] = useState(0);


    const minus = () => {
        updatesState(prevCount => prevCount - 1);
    }
    const add = () => {
        updatesState(prevCount => prevCount + 1);
    }
    return (
        <>
            <div style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold", padding: "150px" }}>
                <button onClick={minus} style={{ width: "60px", borderRadius: "5px", fontWeight: "bold" }}>-</button>
                <p style={{ display: "initial", margin: "50px", fontSize: "60px" }}>{initialState}</p>
                <button onClick={add} style={{ width: "60px", borderRadius: "5px", fontWeight: "bold" }}>+</button>

            </div>

        </>
    )
}

export default Counter;