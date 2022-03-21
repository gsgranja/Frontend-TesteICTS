import box from '../assets/images/box.svg';
import cart from '../assets/images/cart.svg';
const name = 'Dashboard ICTS';

// Template separada da função, padronizando com outros frameworks e reduzindo a curva de aprendizado.

const template = 
<div className="container">
<div className="row">
  <div className='column'>  
    <h1 className='tittle'>{name}</h1>
  </div>
</div>
<div className="row">
  <div className='column'></div>
  <div className='column'>
    <a href="/compras"><img src={box} alt=""></img></a>
  </div>
  <div className='column'>
  <a href="/produtos"><img src={cart} alt=""></img></a>
  </div>
  <div className='column'></div>
</div>
</div>;


function App() {
  return template
}
export default App;
