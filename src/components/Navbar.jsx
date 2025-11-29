

    const Navbar = () => {

  const goTo = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>My React App</h2>

      <ul style={styles.menu}>
        <li onClick={() => goTo("state")}>State</li>
        <li onClick={() => goTo("numbers")}>Numbers</li>
        <li onClick={() => goTo("circle")}>Circle</li>
        <li onClick={() => goTo("fib")}>Fibonacci</li>
        <li onClick={() => goTo("fetch")}>Fetch</li>
        <li onClick={() => goTo("local")}>Localstorage</li>
        <li onClick={() => goTo("props")}>Props</li>
      </ul>
    </nav>
  );
};

  

const styles = {
  nav: {
    width: "100%",
    background: "#1e1e1e",
    color: "white",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  logo: {
    margin: 0
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    cursor: "pointer"
  }
};


export default Navbar;
