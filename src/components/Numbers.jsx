const Numbers = () => {

    const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <>
            <div className="mainnumber">
                <h2>Homework: 2× Table</h2>
                <div className="numbertable">
                    {tables.map((e, i) => (
                        <div className="tablerow" key={i}>
                            <h3>{e} × 2 = {e * 2}</h3>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )


}


export default Numbers