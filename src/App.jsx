import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";
function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="John"
            content="Lorem ipsum dolor sit amet, consect et nesciunt sap  technically correct semantics of the "
            propTeste="Teste"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
