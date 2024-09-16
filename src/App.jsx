import './App.css'
import Yellow from "./components/yellow"
import Pink from './components/pink'
import LightBlue from './components/lightblue'

function App() {

  return (
    <main className='main'>
     <Yellow />
     <div className="body">
      <Pink />
      <LightBlue />
     </div>
    </main>
  )
}

export default App
