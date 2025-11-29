import { useState, useEffect } from "react";

const FetchExample = () => {
  const [data, setData] = useState([]);  // FIXED
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

//      //       ///         ////

const LocalStorageExample = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("myName");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myName", name);
  }, [name]);

  return (
    <div>
      <h2>Enter Name:</h2>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Saved Value: {name}</p>
    </div>
  );
};

export default FetchExample;
export { LocalStorageExample };
