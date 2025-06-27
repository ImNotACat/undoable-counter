import './App.css'
import { Counter } from './counter/Counter'
import { CounterProvider } from './counter/counterContext.tsx'

function App() {


  return (
    <>
      <div> 
        <p className='title'>
          UNDOABLE COUNTER
        </p>
        <p className='subtitle'>
          A simple counter with persistent state.
        </p>
      </div>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </>
  )
}

export default App
