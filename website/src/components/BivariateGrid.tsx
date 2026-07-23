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
    <div>
      <p className="chart-title">Each Climate Variable vs. Yield</p>
      <p className="chart-caption">
        Each dot represents one year. Its position shows that year&rsquo;s value for the
        climate variable and the coffee yield recorded alongside it.
      </p>

      <div className="bivariate-legend">
        <span className="legend-dot legend-dot-significant"></span> Statistically significant (p &lt; 0.05)
        <span className="legend-dot legend-dot-none" style={{ marginLeft: 20 }}></span> Not statistically significant (p &ge; 0.05)
    </div>

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
              <div style={{ width: '100%', height: 160, marginTop: 16 }}>
                <ResponsiveContainer>
                  <ScatterChart margin={{ top: 5, right: 10, left: 20, bottom: 5 }}>
                    <XAxis dataKey="x" tick={false} axisLine={true} tickLine={true} stroke="#8a6d5c" />
                    <YAxis
                      dataKey="y"
                      tick={false}
                      axisLine={true}
                      tickLine={true}
                      stroke="#8a6d5c"
                      label={{ value: 'Yield', angle: -90, position: 'insideLeft', offset: 10, style: { fill: '#8a6d5c', fontSize: 11 } }}
                    />
                    <Scatter data={points} fill={significant ? '#c1502e' : '#a8886f'} />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
              <p className="bivariate-stat">
                p = {v.p.toFixed(3)} {significant ? '\u2014 significant' : '\u2014 not significant'}
              </p>
            </div>
          )
        })}
      </div>

      <p className="bivariate-explainer">
        A p-value below 0.05 is the standard threshold for calling a result statistically
        significant, meaning that the pattern is unlikely to be due to chance alone.
      </p>
    </div>
  )
}

export default BivariateGrid