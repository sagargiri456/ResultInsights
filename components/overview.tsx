"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  {
    average: 0,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="average"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={false}
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  )
}