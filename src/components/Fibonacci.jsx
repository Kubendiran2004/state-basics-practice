import { useState } from "react"

const Fibonacci = () => {

    const[fib,setFib]=useState([1,2])

    const addFib = () => {

        const last = fib[fib.length-1]
        const secondLast = fib[fib.length-2]
        const  nextNumber = last + secondLast

        setFib([...fib,nextNumber])
    }

    return (
        <>
        <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",   // full width
    marginTop: "20px"
  }}>
<h2>Fibonacci Series:</h2>
{fib.map((e,i)=>(
<p key={i}> {e}</p>
))}
<button
        onClick={addFib}
        style={{
          padding: "10px",
          background: "skyblue",
          border: "none",
          borderRadius: "5px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Add Next Number
      </button>
        </div>
         </>
    )
    
}


export default Fibonacci