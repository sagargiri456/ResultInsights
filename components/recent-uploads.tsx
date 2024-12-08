"use client"

import { ScrollArea } from "@/components/ui/scroll-area"

export function RecentUploads() {
  return (
    <ScrollArea className="h-[350px]">
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground text-center py-8">
          No recent uploads
        </p>
      </div>
    </ScrollArea>
  )
}