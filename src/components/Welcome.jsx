const Welcome = ({ name, age, skills, address, isStudent, greet }) => {
  return (
    <>
    <h1>Props:</h1>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <p>Skills: {skills.join(", ")}</p>
      <p>City: {address.city} {address.pin}</p>
      <p>Status: {isStudent ? "Student" : "Working"}</p>
      <button onClick={greet}>Greet</button>
    </>
  );
};

export default Welcome