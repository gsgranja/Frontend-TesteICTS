import box from '../assets/images/box.svg';
import cart from '../assets/images/cart.svg';
const name = 'Dashboard ICTS';

// Template separada da função, padronizando com outros frameworks e reduzindo a curva de aprendizado.

const template = 
  <section>
<header className="choiceScreen">
  <h1 className='tittle'>{name}</h1>
  <div className="splashScreen">
    <a href="/produtos"><img src={box} alt=""></img></a>
        <img src={cart} alt=""></img>
  </div>
</header>
</section>;


function App() {
  return template
}
export default App;
