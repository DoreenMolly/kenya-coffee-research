import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import data from '../data/temperatureYieldData.json'

function TemperatureYieldScatter() {
  return (
    <div style={{ width: '100%', maxWidth: 1100, height: 480, margin: '40px auto 0' }}>
      <ResponsiveContainer>
        <ScatterChart margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid stroke="rgba(0,0,0,0.08)" />
          <XAxis
            dataKey="temperature"
            name="Temperature"
            unit="°C"
            stroke="#8a6d5c"
            tick={{ fontSize: 14 }}
            domain={['dataMin - 0.2', 'dataMax + 0.2']}
          />
          <YAxis
            dataKey="yield"
            name="Yield"
            unit=" kg/ha"
            stroke="#8a6d5c"
            tick={{ fontSize: 14 }}
          />
          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            contentStyle={{ fontSize: 14, borderRadius: 6 }}
          />
          <Scatter data={data} fill="#c1502e" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TemperatureYieldScatter