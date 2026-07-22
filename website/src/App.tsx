import Scene from './components/Scene'
import { scenes } from './data/scenes'
import YieldDeclineChart from './components/YieldDeclineChart'
import BivariateGrid from './components/BivariateGrid'
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
          wide={index === 1 || index === 2 || index === 4}
        >
          {index === 6 && (
            <StatCallout value="51%" caption="of yield variation explained by the final model" />
          )}
          <p className="scene-text">{scene.body}</p>
          {index === 1 && <YieldDeclineChart />}
          {index === 2 && <BivariateGrid />}
          {index === 3 && (
            <StatCallout
              value="r = -0.406"
              caption="A correlation coefficient measuring the strength of association between two variables. Here it shows a moderate tendency for yield to fall as temperature rises." />
          )}
          {index === 4 && <ModelProgressionChart />}
          {index === 5 && (
            <StatCallout
            value="Good years predict good years"
            caption="A strong harvest reliably leads to another strong harvest the following year" />
          )}
        </Scene>
      ))}
    </main>
  )
}

export default App