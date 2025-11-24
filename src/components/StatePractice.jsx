import { useState } from "react"


const UseStateDemo = () => {

    // const [state,setState] = useState(0)
    //num state:
    const [increase, setIncrease] = useState(10)

    const addIncrease = () => {
        setIncrease(increase + 1)
    }

    const reset = () => {
        setIncrease(10)
    }

    const [decrease, setDecrease] = useState(10)

    const subDecrease = () => {
        setDecrease(decrease - 1)
    }

    const [multi, setMulti] = useState(10)

    const numMulti = () => {
        setMulti(multi * 4)
    }

    //str state:

    const [name, setName] = useState("SimbuVijay")
    const addName = () => {
        setName("Dhanushhh")
    }

    const [location, setLocation] = useState("Tiruppur")
    const addLocation = () => {
        setLocation("Coimbatore")
    }

    const [movie, setMovie] = useState("Dragon")
    const addMovie = () => {
        setMovie("Lik")
    }

    const [peru, setPeru] = useState(null)
    const togglePeru = () => {
        if (peru === null) {
            setPeru("Simbu Vijay")
        }
        else {
            setPeru(null)
        }
    }

    const [light, setLight] = useState(true)
    const toggleLight = () => {
        setLight(!light)
    }

    const [array, setArray] = useState([])
    const addArray = () => {
        setArray([...array, "Dhanush"])
    }

    const [person, setPerson] = useState({ name: "Dhanush", age: 40 })
    const ChangeName = () => {
        setPerson({ ...person, name: "Pradeep Ranganath" })
    }

    const ChangeAge = () => {
        setPerson({ ...person, age: 28 })
    }

    const [country, setCountry] = useState([{ placename: "india", population: "6,000" },
    { placename: "chinna", population: "9,000" }
    ])
    const addCountry = () => {
        setCountry([...country, { placename: "america", population: "3,000" }])
    }

    const [actors, setActors] = useState([
        { name: "pradeep", role: "Hero", photo: "\hero.jpg.webp" },
        { name: "Ivana", role: "Heroine", photo: "\ivana.jpg" }
    ])
    const addSathyaraj = () => {
        setActors([
            ...actors,
            { name: "Sathyaraj", role: "Appa", photo: "\download.jpeg" }
        ])
    }
    return (
        <>
            <div>
                <h1 style={{ textAlign: "center" }}>
                    State Practice
                </h1>
                <div className="container">
                    <div className="left">
                        <h3>Increase:{increase}</h3>
                        <button onClick={addIncrease} style={{ background: "blue", padding: "5px", border: "none", borderRadius: "5px" }}>Click Here For Increase</button>
                        <br />
                        <h3>Reset:{increase}</h3>
                        <button onClick={reset} style={{ background: "orange", padding: "5px", border: "none", borderRadius: "5px" }}>Click Here For Reset</button>
                        <br />
                        <h3>Decrease:{decrease}</h3>
                        <button onClick={subDecrease} style={{ background: "green", padding: "5px", border: "none", borderRadius: "5px" }}>Click Here For Decrease</button>
                        <br />
                        <h3>Multiple:{multi}</h3>
                        <button onClick={numMulti} style={{ background: "red", padding: "5px", border: "none", borderRadius: "5px" }}>Click Here For Multiple</button>
                        <br />
                        <h3>Change Name:{name}</h3>
                        <button onClick={addName} style={{ background: "grey", padding: "5px", border: "none", borderRadius: "5px" }}>Click Here For Change Name</button>
                        <br />
                        <h3>Change Location:{location}</h3>
                        <button onClick={addLocation} style={{ background: "purple", padding: "5px", border: "none", borderRadius: "5px" }}>Click Here For Change Location</button>
                        <h3>Change Movie:{movie}</h3>
                        <button onClick={addMovie} style={{ background: "pink", padding: "5px", border: "none", borderRadius: "5px" }}>Click Here For Change Location</button>
                    </div>
                    <div className="right">

                        <h3>Null:{peru}</h3>
                        <button onClick={togglePeru} style={{ background: "pink", padding: "5px", border: "none", borderRadius: "5px" }}>Click Here For Check Null</button>
                        <br />
                        <h3>Light Status: {light ? "ON" : "OFF"}</h3>
                        <button onClick={toggleLight} style={{ background: "purple", padding: "5px", border: "none", borderRadius: "5px" }}>Click for Light Status</button>
                        <br />
                        <h3>Array List:</h3>
                        {
                            array.map((e, i) => (
                                <p key={i}>{e}</p>
                            ))
                        }
                        <button onClick={addArray} style={{ background: "grey", padding: "5px", border: "none", borderRadius: "5px" }}>Add Name</button>
                        <br />
                        <h3>Name: {person.name} Age: {person.age}</h3>
                        <button onClick={ChangeName} style={{ background: "red", padding: "5px", border: "none", borderRadius: "5px" }}>Click For change object Name</button>
                        <button onClick={ChangeAge} style={{ background: "red", padding: "5px", border: "none", borderRadius: "5px", margin: "2px" }}>Click For change object Name</button>
                        <br />
                        <h3>Array Of Object:</h3>
                        {
                            country.map((e, i) => (
                                <p key={i}>{e.placename} {e.population}</p>
                            ))
                        }
                        <button onClick={addCountry} style={{ background: "green", padding: "5px", border: "none", borderRadius: "5px" }}>click here</button>
                        <br />
                        <h3>Love Today</h3>
                        {
                            actors.map((e, i) => (
                                <div key={i}>
                                    <img src={e.photo} width="120" alt={e.name} />
                                    <p>{e.name}  {e.age}</p>
                                </div>
                            ))}
                        <button onClick={addSathyaraj} style={{ background: "orange", padding: "5px", border: "none", borderRadius: "5px" }}>Click Here</button>
                    </div>

                </div>



            </div>


        </>
    )

}


export default UseStateDemo


