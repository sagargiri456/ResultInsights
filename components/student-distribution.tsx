"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  {
    range: "0-20",
    students: 5,
  },
  {
    range: "21-40",
    students: 15,
  },
  {
    range: "41-60",
    students: 30,
  },
  {
    range: "61-80",
    students: 40,
  },
  {
    range: "81-100",
    students: 20,
  },
]

export function StudentDistribution() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <g className="recharts-cartesian-axis recharts-xaxis">
          {data.map((entry, index) => (
            <text
              key={index}
              x={50 + (index * 100)}
              y={330}
              textAnchor="middle"
              fill="hsl(var(--foreground))"
              fontSize={12}
            >
              {entry.range}
            </text>
          ))}
        </g>
        <g className="recharts-cartesian-axis recharts-yaxis">
          {[0, 10, 20, 30, 40].map((value, index) => (
            <text
              key={index}
              x={30}
              y={300 - (index * 70)}
              textAnchor="end"
              fill="hsl(var(--foreground))"
              fontSize={12}
            >
              {value}
            </text>
          ))}
        </g>
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Score Range
                      </span>
                      <span className="font-bold text-muted-foreground">
                        {payload[0].payload.range}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Students
                      </span>
                      <span className="font-bold text-muted-foreground">
                        {payload[0].value}
                      </span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Area
          type="monotone"
          dataKey="students"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.2}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}