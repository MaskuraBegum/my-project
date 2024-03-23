
import LineChart from './componentes/LineCharts/LineChart'
import './App.css'
import Navbar from './componentes/headnav/Navbar'
import PriceOptions from './componentes/price/PriceOptions'

function App() {

  return (
    <>
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </div>
    </>
  )
}

export default App
