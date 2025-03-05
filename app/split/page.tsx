"use client"

import { SplitScreenImages } from "@/components/split-screen-images"

const leftImageOptions = [
  {
    src: "/images/department-1.jpg",
    alt: "Department Building",
    label: "Main Building"
  },
  {
    src: "/images/department-2.jpg",
    alt: "Department Lab",
    label: "Computer Lab"
  },
  {
    src: "/images/department-3.jpg",
    alt: "Department Library",
    label: "Library"
  },
  {
    src: "/images/department-4.jpg",
    alt: "Department Classroom",
    label: "Smart Classroom"
  }
]

const rightImageOptions = [
  {
    src: "/images/campus-1.jpg",
    alt: "Campus View",
    label: "Campus View"
  },
  {
    src: "/images/campus-2.jpg",
    alt: "Campus Garden",
    label: "Garden"
  },
  {
    src: "/images/campus-3.jpg",
    alt: "Campus Sports",
    label: "Sports Complex"
  },
  {
    src: "/images/campus-4.jpg",
    alt: "Campus Auditorium",
    label: "Auditorium"
  }
]

export default function SplitPage() {
  return (
    <main className="min-h-screen">
      <SplitScreenImages
        leftImages={leftImageOptions}
        rightImages={rightImageOptions}
      />
    </main>
  )
} 