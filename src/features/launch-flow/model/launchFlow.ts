import type { LaunchStep } from '../../../shared/api/contracts'

export function normalizeLaunchSteps(steps: LaunchStep[]): LaunchStep[] {
  return [...steps].sort((a, b) => Number(a.order) - Number(b.order))
}
