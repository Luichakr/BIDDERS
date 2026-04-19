import type { ReactNode } from 'react'
import './surface.css'

type SurfaceCardProps = {
  children: ReactNode
  className?: string
}

export function SurfaceCard({ children, className = '' }: SurfaceCardProps) {
  const composite = className ? `surface-card ${className}` : 'surface-card'
  return <article className={composite}>{children}</article>
}
