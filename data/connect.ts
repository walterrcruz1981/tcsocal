import type { ConnectGroup, ConnectStep } from '@/types/connect'

export const connectGroups: ConnectGroup[] = [
  {
    title: "Small Groups",
    description: "Join a small group to grow in faith and build meaningful relationships.",
    areas: ["Bible Study", "Prayer", "Fellowship", "Support"],
    image: "/connect/small-groups.webp"
  },
  // ... rest of connect groups
]

export const connectSteps: ConnectStep[] = [
  {
    number: "01",
    title: "Visit a Service",
    description: "Join us for a Sunday service and experience worship with our community."
  },
  // ... rest of steps
] 