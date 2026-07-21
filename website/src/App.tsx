import Scene from './components/Scene'
import { scenes } from './data/scenes'
import './App.css'

function App() {
  return (
    <main>
      {scenes.map((scene) => (
        <Scene key={scene.label} label={scene.label} title={scene.title}>
          <p>{scene.body}</p>
        </Scene>
      ))}
    </main>
  )
}

export default App