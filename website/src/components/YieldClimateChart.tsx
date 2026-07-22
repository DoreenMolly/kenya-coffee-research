import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import data from '../data/yieldClimateData.json'

function YieldClimateChart() {
  return (
    <div style={{ width: '100%', maxWidth: 1100, height: 520, margin: '40px auto 0' }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid stroke="rgba(0,0,0,0.08)" vertical={false} />
          <XAxis
            dataKey="year"
            stroke="#8a6d5c"
            tick={{ fontSize: 14 }}
            interval={4}
          />
          <YAxis stroke="#8a6d5c" tick={{ fontSize: 14 }} />
          <Tooltip
            contentStyle={{ fontSize: 14, borderRadius: 6 }}
            labelStyle={{ fontWeight: 600 }}
          />
          <Line
            type="monotone"
            dataKey="yield"
            name="Yield (kg/ha)"
            stroke="#c1502e"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="rainfall"
            name="Rainfall (mm)"
            stroke="#4a3728"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default YieldClimateChart