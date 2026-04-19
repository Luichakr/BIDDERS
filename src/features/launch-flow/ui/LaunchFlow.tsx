import type { LaunchStep } from '../../../shared/api/contracts'
import { normalizeLaunchSteps } from '../model/launchFlow'
import { useI18n } from '../../../shared/i18n/I18nProvider'

interface LaunchFlowProps {
  steps: LaunchStep[]
}

export function LaunchFlow({ steps }: LaunchFlowProps) {
  const { t } = useI18n()
  const orderedSteps = normalizeLaunchSteps(steps)
  const localizedSteps = [
    { title: t('launchStepOneTitle'), description: t('launchStepOneDescription') },
    { title: t('launchStepTwoTitle'), description: t('launchStepTwoDescription') },
    { title: t('launchStepThreeTitle'), description: t('launchStepThreeDescription') },
    { title: t('launchStepFourTitle'), description: t('launchStepFourDescription') },
    { title: t('launchStepFiveTitle'), description: t('launchStepFiveDescription') },
  ]

  return (
    <ol>
      {orderedSteps.map((step, index) => (
        <li className={`reveal delay-${Math.min(index, 3)}`} key={step.id}>
          <span>{step.order}</span>
          <div>
            <h3>{localizedSteps[index]?.title ?? step.title}</h3>
            <p>{localizedSteps[index]?.description ?? step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
