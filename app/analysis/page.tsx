import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SubjectPerformance } from "@/components/subject-performance"
import { StudentDistribution } from "@/components/student-distribution"

export default function AnalysisPage() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Subject Performance Analysis</CardTitle>
          <CardDescription>
            Average performance across different subjects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SubjectPerformance />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Student Score Distribution</CardTitle>
          <CardDescription>
            Distribution of students across different score ranges
          </CardDescription>
        </CardHeader>
        <CardContent>
          <StudentDistribution />
        </CardContent>
      </Card>
    </div>
  )
}