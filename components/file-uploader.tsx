"use client"

import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Upload } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export function FileUploader() {
  const [uploadProgress, setUploadProgress] = useState(0)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Simulate upload progress
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setUploadProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
        // Reset progress after a delay
        setTimeout(() => setUploadProgress(0), 1000)
      }
    }, 200)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'text/csv': ['.csv'],
      'application/pdf': ['.pdf']
    },
    maxFiles: 1
  })

  return (
    <div>
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
          isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary"
        )}
      >
        <input {...getInputProps()} />
        <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
        {isDragActive ? (
          <p className="text-lg">Drop the file here...</p>
        ) : (
          <div>
            <p className="text-lg mb-2">Drag and drop your marksheet here</p>
            <p className="text-sm text-muted-foreground">
              Supports Excel, CSV, and PDF files
            </p>
          </div>
        )}
      </div>
      {uploadProgress > 0 && (
        <div className="mt-4 space-y-2">
          <Progress value={uploadProgress} />
          <p className="text-sm text-center text-muted-foreground">
            Uploading... {uploadProgress}%
          </p>
        </div>
      )}
    </div>
  )
}