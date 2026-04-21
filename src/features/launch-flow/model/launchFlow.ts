import type { LaunchStep } from '../../../shared/types/contracts'

export function normalizeLaunchSteps(steps: LaunchStep[]): LaunchStep[] {
  return [...steps].sort((a, b) => Number(a.order) - Number(b.order))
}
