"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface ExplanationViewProps {
  trace: {
    id: string
    type: "insight" | "recommendation"
    title: string
    timestamp: Date
    stages: {
      name: string
      status: "completed" | "in-progress" | "failed"
      duration: number
      input: string
      output: string
      reasoning: string
      confidence?: number
    }[]
    model: {
      name: string
      version: string
      temperature: number
    }
    metadata: {
      userId: string
      sessionId: string
      traceId: string
    }
  }
}

export function ExplanationView({ trace }: ExplanationViewProps) {
  const getStatusColor = (status: string) => {
    const colors = {
      completed: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
      "in-progress": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
      failed: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    }
    return colors[status as keyof typeof colors]
  }

  return (
    <Card className="max-w-4xl">
      <CardHeader>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline">{trace.type.toUpperCase()}</Badge>
            <Badge>Opik Trace</Badge>
          </div>
          <CardTitle className="text-2xl">{trace.title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            Trace ID: {trace.metadata.traceId} • Session: {trace.metadata.sessionId}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-muted/50">
          <div>
            <p className="text-sm text-muted-foreground">Model</p>
            <p className="font-semibold">
              {trace.model.name} v{trace.model.version}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Temperature</p>
            <p className="font-semibold">{trace.model.temperature}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Stages</p>
            <p className="font-semibold">{trace.stages.length}</p>
          </div>
        </div>

        <Separator />

        <div className="space-y-6">
          <h3 className="font-semibold text-lg">Agent Pipeline Stages</h3>

          {trace.stages.map((stage, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                  {index + 1}
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{stage.name}</h4>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(stage.status)}>
                        {stage.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {stage.duration}ms
                      </span>
                      {stage.confidence && (
                        <span className="text-sm font-medium text-primary">
                          {stage.confidence}% confidence
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="rounded-lg border p-3 bg-background">
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        INPUT
                      </p>
                      <pre className="text-sm whitespace-pre-wrap font-mono">
                        {stage.input}
                      </pre>
                    </div>

                    <div className="rounded-lg border p-3 bg-background">
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        REASONING
                      </p>
                      <p className="text-sm">{stage.reasoning}</p>
                    </div>

                    <div className="rounded-lg border p-3 bg-background">
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        OUTPUT
                      </p>
                      <pre className="text-sm whitespace-pre-wrap font-mono">
                        {stage.output}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {index < trace.stages.length - 1 && (
                <div className="ml-4 h-8 w-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
