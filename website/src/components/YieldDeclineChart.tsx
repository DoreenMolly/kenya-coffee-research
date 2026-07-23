import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import fullData from '../data/yieldClimateData.json'

const data = fullData.map((d) => ({ year: d.year, yield: d.yield }))

function YieldDeclineChart() {
  return (
    <div style={{ width: '100%', maxWidth: 1100, margin: '40px auto 0' }}>
      <p className="chart-title">Coffee Yield, 1990–2024</p>
      <div style={{ width: '100%', height: 460 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
            <CartesianGrid stroke="rgba(0,0,0,0.08)" vertical={false} />
            <XAxis
              dataKey="year"
              stroke="#8a6d5c"
              tick={{ fontSize: 14 }}
              interval={4}
              label={{ value: 'Year', position: 'insideBottom', offset: -10, style: { fill: '#8a6d5c', fontSize: 13 } }}
            />
            <YAxis
              stroke="#8a6d5c"
              tick={{ fontSize: 14 }}
              label={{ value: 'Yield (kg/ha)', angle: -90, position: 'insideLeft', style: { fill: '#8a6d5c', fontSize: 13 } }}
            />
            <Tooltip contentStyle={{ fontSize: 14, borderRadius: 6 }} labelStyle={{ fontWeight: 600 }} />
            <Line
              type="monotone"
              dataKey="yield"
              name="Yield (kg/ha)"
              stroke="#c1502e"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default YieldDeclineChart