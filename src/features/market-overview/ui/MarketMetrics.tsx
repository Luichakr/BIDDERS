import type { MarketMetric } from '../../../shared/api/contracts'
import { useI18n } from '../../../shared/i18n/I18nProvider'

interface MarketMetricsProps {
  metrics: MarketMetric[]
}

export function MarketMetrics({ metrics }: MarketMetricsProps) {
  const { t } = useI18n()
  const labels = [t('metricReadiness'), t('metricDecisionTime'), t('metricRiskEvents')]

  return (
    <div className="hero-metrics reveal">
      {metrics.map((metric, index) => (
        <article key={metric.id}>
          <p>{labels[index] ?? metric.label}</p>
          <strong>{metric.value}</strong>
        </article>
      ))}
    </div>
  )
}
