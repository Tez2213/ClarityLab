"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface FeedbackFormProps {
  itemId: string
  itemType: "insight" | "recommendation"
  onSubmit?: (feedback: {
    itemId: string
    helpful: boolean
    comment?: string
  }) => void
}

export function FeedbackForm({ itemId, itemType, onSubmit }: FeedbackFormProps) {
  const [helpful, setHelpful] = useState<boolean | null>(null)
  const [comment, setComment] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (helpful !== null) {
      onSubmit?.({
        itemId,
        helpful,
        comment: comment.trim() || undefined,
      })
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <Card className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20">
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 text-green-800 dark:text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="m9 11 3 3L22 4" />
            </svg>
            <p className="font-medium">Thank you for your feedback!</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          Was this {itemType} helpful?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-3">
          <Button
            variant={helpful === true ? "default" : "outline"}
            className="flex-1"
            onClick={() => setHelpful(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M7 10v12" />
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
            </svg>
            Helpful
          </Button>
          <Button
            variant={helpful === false ? "default" : "outline"}
            className="flex-1"
            onClick={() => setHelpful(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M17 14V2" />
              <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
            </svg>
            Not Helpful
          </Button>
        </div>

        {helpful !== null && (
          <>
            <div className="space-y-2">
              <label
                htmlFor="comment"
                className="text-sm font-medium text-muted-foreground"
              >
                Additional Comments (Optional)
              </label>
              <textarea
                id="comment"
                className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Tell us more about your experience..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            <Button onClick={handleSubmit} className="w-full">
              Submit Feedback
            </Button>
          </>
        )}

        <div className="text-xs text-muted-foreground text-center">
          Your feedback helps improve ClarityLab's AI recommendations
        </div>
      </CardContent>
    </Card>
  )
}
