"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface UploadCSVProps {
  onUpload?: (file: File) => void
}

export function UploadCSV({ onUpload }: UploadCSVProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files[0]
    if (file && file.name.endsWith(".csv")) {
      setFileName(file.name)
      onUpload?.(file)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      onUpload?.(file)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload CSV</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" x2="12" y1="3" y2="15" />
              </svg>
            </div>

            {fileName ? (
              <div className="space-y-2">
                <p className="text-sm font-medium text-green-600">
                  File uploaded: {fileName}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFileName(null)}
                >
                  Upload another file
                </Button>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <p className="text-lg font-medium">
                    Drag and drop your CSV file here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    or click to browse from your computer
                  </p>
                </div>

                <label htmlFor="file-upload">
                  <Button asChild>
                    <span>Choose File</span>
                  </Button>
                  <input
                    id="file-upload"
                    type="file"
                    accept=".csv"
                    className="sr-only"
                    onChange={handleFileSelect}
                  />
                </label>
              </>
            )}
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="text-xs text-muted-foreground space-y-1">
              <p className="font-medium">CSV Format Requirements:</p>
              <ul className="list-disc list-inside space-y-1 text-left max-w-md mx-auto">
                <li>Columns: Date, Description, Amount, Category, Merchant</li>
                <li>Date format: YYYY-MM-DD or MM/DD/YYYY</li>
                <li>Amount: Positive for income, negative for expenses</li>
                <li>Maximum file size: 10MB</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
