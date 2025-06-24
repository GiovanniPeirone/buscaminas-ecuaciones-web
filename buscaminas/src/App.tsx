import { useState } from 'react'
import  styles from'./App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className={styles["game"]}>
          <div className={styles["game-conteiner"]}>
            <div className={styles["game-row-conteiner"]}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <button>Reload</button>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default App
