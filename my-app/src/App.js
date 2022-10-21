import styles from "./App.module.css";
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className={styles.App}>
      <h2 className={styles.title}>Title</h2>
      <Users/>
      <Form/>
    </div>
  );
}

export default App;
