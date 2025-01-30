import './App.css'
import Home from './components/Home'

function App() {

  return (
    <section className='flex flex-col justify-center gap-6'>
      <h2 className='font-bold text-2xl'>Welcome to my Todo App</h2>
      <Home />
    </section>
  )
}

export default App
