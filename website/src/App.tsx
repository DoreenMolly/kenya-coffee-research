import Scene from './components/Scene'
import { scenes } from './data/scenes'
import YieldClimateChart from './components/YieldClimateChart'
import './App.css'
import ModelProgressionChart from './components/ModelProgressionChart'
import StatCallout from './components/StatCallout'

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
          wide={index === 1 || index === 2}
          >
          <p className="scene-text">{scene.body}</p>
          {index === 1 && <YieldClimateChart />}
          {index === 2 && <ModelProgressionChart/>}
          {index === 3 && (
            <StatCallout value="p = 0.001" caption="Yield_Lag1 coefficient, statistically significant" />
          )}
        </Scene>
      ))}
    </main>
  )
}

export default App