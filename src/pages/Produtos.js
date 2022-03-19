import box from '../assets/images/box.svg';
import cart from '../assets/images/cart.svg';
import ReactDOM from 'react-dom';

const name = 'Josh Perez';

// Template separada da função, padronizando com outros frameworks e reduzindo a curva de aprendizado.
const template = 
<section>
<header class="choiceScreen">
  <div class="flex items-center justify-between">
    <h2 class="font-semibold text-slate-900">Projects</h2>
    <a href="/new" class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
      <svg width="20" height="20" fill="currentColor" class="mr-2" aria-hidden="true">
        <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
      </svg>
      New
    </a>
  </div>
  <form class="group relative">
    <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
    </svg>
    <input class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Filter projects..."/>
  </form>
</header>
</section>;
  
function App() {
    return template
}

export default App;