import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import rawData from '../data/modelResults.json'

const data = rawData.map((d) => ({
  ...d,
  r2Percent: Math.round(d.r2 * 1000) / 10,
}))

function ModelProgressionChart() {
  return (
    <div style={{ width: '100%', maxWidth: 1100, height: 420, margin: '40px auto 0' }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <XAxis dataKey="model" stroke="#8a6d5c" tick={{ fontSize: 14 }} />
            <YAxis
            stroke="#8a6d5c"
            tick={{ fontSize: 14 }}
            domain={[0, 60]}
            unit="%"
            label={{ value: 'Variation explained', angle: -90, position: 'insideLeft', style: { fill: '#8a6d5c', fontSize: 13 } }}
            />         
            <Tooltip
            contentStyle={{ fontSize: 14, borderRadius: 6 }}
            labelStyle={{ fontWeight: 600 }}
          />
          <Bar dataKey="r2Percent" name="R²" unit="%" radius={[4, 4, 0, 0]}>
            {data.map((entry, i) => (
              <Cell key={entry.model} fill={i === 4 ? '#c1502e' : '#a8886f'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ModelProgressionChart