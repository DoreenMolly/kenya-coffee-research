import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import data from '../data/bivariateData.json'

const variables = [
  { key: 'temperature', label: 'Temperature', unit: '°C', r: -0.406, p: 0.016 },
  { key: 'precipitation', label: 'Precipitation', unit: 'mm', r: 0.041, p: 0.815 },
  { key: 'humidity', label: 'Humidity', unit: '%', r: -0.153, p: 0.381 },
  { key: 'solar', label: 'Solar Radiation', unit: ' MJ/m²', r: 0.097, p: 0.578 },
]

function BivariateGrid() {
  return (
    <div className="bivariate-grid">
      {variables.map((v) => {
        const points = data.map((d: Record<string, number>) => ({
          x: d[v.key],
          y: d.yield,
        }))
        const significant = v.p < 0.05

        return (
          <div key={v.key} className={`bivariate-cell ${significant ? 'bivariate-significant' : ''}`}>
            <p className="bivariate-title">{v.label}</p>
            <div style={{ width: '100%', height: 160 }}>
              <ResponsiveContainer>
                <ScatterChart margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <XAxis dataKey="x" hide />
                  <YAxis dataKey="y" hide />
                  <Scatter data={points} fill={significant ? '#c1502e' : '#a8886f'} />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
            <p className="bivariate-stat">
              {significant ? 'Statistically significant' : 'Not statistically significant'}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default BivariateGrid