import Scene from './components/Scene'
import { scenes } from './data/scenes'
import YieldClimateChart from './components/YieldClimateChart'
import './App.css'

function App() {
  return (
    <main>
      <header className="hero">
        <p className="hero-eyebrow">A data science investigation</p>
        <h1 className="hero-title">How much does climate explain Kenya's declining coffee yield?</h1>
        <p className="hero-sub">35 years of data. Five Models.</p>
      </header>

      {scenes.map((scene, index) => (
        <Scene 
          key={scene.label} 
          label={scene.label} 
          title={scene.title}
          tone={index % 2 === 0 ? 'light' : 'dark'}
          wide={index === 1}
          >
          <p>{scene.body}</p>
          {index === 1 && <YieldClimateChart />}
        </Scene>
      ))}
    </main>
  )
}

export default App