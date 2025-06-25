import styles from './App.module.css';

function App() {

  const btn_1 = document.getElementById('1');
  const btn_2 = document.getElementById('2');
  const btn_3 = document.getElementById('3');
  const btn_4 = document.getElementById('4');
  const btn_5 = document.getElementById('5');
  const btn_6 = document.getElementById('6');
  const btn_7 = document.getElementById('7');
  const btn_8 = document.getElementById('8');
  const btn_9 = document.getElementById('9');
  const btn_10 = document.getElementById('10');
  const btn_11 = document.getElementById('11');
  const btn_12 = document.getElementById('12');
  const btn_13 = document.getElementById('13');
  const btn_14 = document.getElementById('14');
  const btn_15 = document.getElementById('15');
  const btn_16 = document.getElementById('16');
  const btn_17 = document.getElementById('17');
  const btn_18 = document.getElementById('18');
  const btn_19 = document.getElementById('19');
  const btn_20 = document.getElementById('20');
  const btn_21 = document.getElementById('21');
  const btn_22 = document.getElementById('22');
  const btn_23 = document.getElementById('23');
  const btn_24 = document.getElementById('24');
  const btn_25 = document.getElementById('25');

  const maping_button : (HTMLElement | null)[][] = [
    [btn_1, btn_2, btn_3, btn_4, btn_5],
    [btn_6, btn_7, btn_8, btn_9, btn_10],
    [btn_11, btn_12, btn_13, btn_14, btn_15],
    [btn_16, btn_17, btn_18, btn_19, btn_20],
    [btn_21, btn_22, btn_23, btn_24, btn_25],
  ]

  // Creamos un array del 1 al 25
  const buttonsArray = Array.from({ length: 25 }, (_, i) => i + 1);
  let ArrayBombas: number[]=[];


  let casillas_clikeadas = 0;
  let cantidadDECAsillas = 25;
  let cantidadDecasillasLibres = 0;
  let CantidadDeBombas = 0;

  // Manejador de clic
  const handleClick = (id: number) => {
    /*
    if (casillas_clikeadas == cantidadDecasillasLibres) {
      alert("Ganasete")
      window.location.reload()
    }
*/
    const slected_element = document.getElementById(id.toString());
    if (slected_element){
      // Ver si se hiso clik en un lugar con una mina
      for (let i = 0; i < ArrayBombas.length; i++){
        if ( ArrayBombas[i] == id){
          alert("Perdiste")
          window.location.reload()
        }
      }

      
      /*
      Ver si es la primara vez que se hace clik 
      si haci es generar la posicion de las bombas
      */
      if (casillas_clikeadas == 0) {
        for(let i = 0; i < buttonsArray.length; i++){
          let randomNum : number = randomInt(9)
          if (randomNum == 1 || randomNum == 5){
              let NewBomba = document.getElementById(buttonsArray[i].toString())
              
              if(NewBomba){
                NewBomba.style.backgroundColor = 'red'
              }
              CantidadDeBombas = CantidadDeBombas + 1;
              ArrayBombas.push(buttonsArray[i])
          }
        }
        cantidadDecasillasLibres = cantidadDECAsillas - CantidadDeBombas;
        despejeDeCasillasIniciales(id, ArrayBombas)


      }

      console.log('Clickeaste la casilla', id);
      slected_element.style.backgroundColor = '#000'
    
    }
    
    casillas_clikeadas = casillas_clikeadas + 1;
  };




  return (
    <>
      <div>
        <div className={styles.game}>
          <div className={styles['game-conteiner']}>
            <div className={styles['game-row-conteiner']} id="buttons_conteiner">
              {buttonsArray.map((value) => (
                <div
                  key={value}
                  id={`${value}`}
                  className={styles.item}
                  onClick={() => handleClick(value)}
                >
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => window.location.reload()}>Reload</button>
        </div>
      </div>
    </>
  );
}

function verSiHayBomasAlRededor(id : number){
  //Esta funcion va a estar encargada de detectar la cantidad de bombas al rederor de una casilla
}

function despejeDeCasillasIniciales(id : number, ArrayBombas : number[]) {
  //Despejar sonas que no tengan bomba al rededor del clik inicial
  let topNum = 6;
  for (let i = 0; i < 3; i++) {
    let calc = id - topNum
    const btntop = document.getElementById(calc.toString())
    if (btntop) {
      for (let a = 0; a < ArrayBombas.length; a++) {
        if (ArrayBombas[a] == calc) {
          break;
        } else {
          btntop.style.backgroundColor = "black"
          break;
        }
      }
    }
    topNum = topNum - 1;
  }

  //Depeje de todas las casillas de abajo
  let bottomNum = 6;
  for (let i = 0; i < 3; i++) {
    let calc = id + bottomNum
    const btntop = document.getElementById(calc.toString())
    if (btntop) {
      for (let a = 0; a < ArrayBombas.length; a++) {
        if (ArrayBombas[a] == calc) {
          btntop.style.backgroundColor = "red"
          break;
        } else {
          btntop.style.backgroundColor = "black"
          break;
        }
      }
    }
    bottomNum = bottomNum - 1;
  }

  // Despeje de la casilla de la derecha
  const calcleft = id - 1;
  const btnleft = document.getElementById(calcleft.toString())
  if (btnleft) {
    for (let a = 0; a < ArrayBombas.length; a++) {
      if (ArrayBombas[a] == calcleft) {
        btnleft.style.backgroundColor = "red"
        break;
      } else {
        btnleft.style.backgroundColor = "black"
        break;
      }
    }
  }
  //Despeje de la casillade la derecja
  const calcright = id + 1;
  const btnright = document.getElementById(calcright.toString())
  if (btnright) {
    for (let a = 0; a < ArrayBombas.length; a++) {
      if (ArrayBombas[a] == calcleft) {
        btnright.style.backgroundColor = "red"
        break;
      } else {
        btnright.style.backgroundColor = "black"
        break;
      }
    }
  }
}


function randomInt(max : Number) : number {
  return Math.floor(Math.random() * 10) 
}


export default App;
