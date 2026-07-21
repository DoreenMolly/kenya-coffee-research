import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import data from '../data/yieldClimateData.json'

function YieldClimateChart() {
  return (
    <div style={{ width: '100%', maxWidth: 900, height: 400, margin: '32px auto 0' }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis
            dataKey="year"
            stroke="#8a6d5c"
            tick={{ fontSize: 12 }}
            interval={4}
          />
          <YAxis stroke="#8a6d5c" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ fontSize: 13, borderRadius: 6 }}
            labelStyle={{ fontWeight: 600 }}
          />
          <Line
            type="monotone"
            dataKey="yield"
            name="Yield (kg/ha)"
            stroke="#c1502e"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="rainfall"
            name="Rainfall (mm)"
            stroke="#4a3728"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default YieldClimateChart