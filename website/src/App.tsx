import Scene from './components/Scene'
import { scenes } from './data/scenes'
import YieldDeclineChart from './components/YieldDeclineChart'
import TemperatureYieldScatter from './components/TemperatureYieldScatter'
import ModelProgressionChart from './components/ModelProgressionChart'
import StatCallout from './components/StatCallout'
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
          wide={index === 1 || index === 2 || index === 3}
        >
          <p className="scene-text">{scene.body}</p>
          {index === 1 && <YieldDeclineChart />}
          {index === 2 && <TemperatureYieldScatter />}
          {index === 3 && <ModelProgressionChart />}
          {index === 4 && (
            <StatCallout value="p = 0.001" caption="Yield_Lag1 coefficient, statistically significant" />
          )}
          {index === 5 && (
            <StatCallout value="51%" caption="of yield variation explained by the final model" />
          )}
        </Scene>
      ))}
    </main>
  )
}

export default App