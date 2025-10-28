function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        padding: "8px 14px",
        borderRadius: "8px",
        margin: "10px",
        backgroundColor: darkMode ? "#444" : "#3498db",
        color: "white",
        border: "none",
        cursor: "pointer"
      }}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
