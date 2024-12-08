"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  {
    subject: "Mathematics",
    average: 75,
  },
  {
    subject: "Science",
    average: 82,
  },
  {
    subject: "English",
    average: 78,
  },
  {
    subject: "History",
    average: 85,
  },
  {
    subject: "Geography",
    average: 80,
  },
]

export function SubjectPerformance() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
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
              {entry.subject}
            </text>
          ))}
        </g>
        <g className="recharts-cartesian-axis recharts-yaxis">
          {[0, 25, 50, 75, 100].map((value, index) => (
            <text
              key={index}
              x={30}
              y={300 - (index * 70)}
              textAnchor="end"
              fill="hsl(var(--foreground))"
              fontSize={12}
            >
              {value}%
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
                        Average
                      </span>
                      <span className="font-bold text-muted-foreground">
                        {payload[0].value}%
                      </span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Bar
          dataKey="average"
          fill="hsl(var(--primary))"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}