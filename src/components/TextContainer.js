export default function MyComponent({ color = "white", title, children }) {
  const styles = {
    container: {
      backgroundColor: color,
    },
    text: {
      color: color === "#FF5555" ? "white" : "black",
    },
  };

  return (
    <div className="container_text" style={styles.container}>
      <h1 style={styles.text}>{title}</h1>
      <p style={styles.text}>{children}</p>
    </div>
  );
}
