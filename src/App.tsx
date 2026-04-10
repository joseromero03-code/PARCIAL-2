import './App.css'
import Card from './components/card'
import useDigimon from './hooks/useDigimon'

function App() {

  const {digi, filtro, setFiltro} = useDigimon()
  return (
    <>

    <h3>
      Muestra examen parcial 2
    </h3>
     <input
        type="text"
        placeholder="Buscar producto"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <button>Buscar</button>

     {digi.map((p)=>(
        <Card
        name={p.name}
        img={p.img}
        level={p.level}
        />
    )) 
    }  
    
    </>
  )
}

export default App
