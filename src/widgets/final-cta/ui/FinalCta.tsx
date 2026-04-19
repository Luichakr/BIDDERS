import type { HomePageContract } from '../../../shared/api/contracts'
import { Button } from '../../../shared/ui/button/Button'
import { useI18n } from '../../../shared/i18n/I18nProvider'

type FinalCtaProps = {
  finalCall: HomePageContract['finalCall']
}

export function FinalCta({ finalCall }: FinalCtaProps) {
  const { t } = useI18n()

  return (
    <section className="final-cta reveal" id="launch">
      <h2>{t('finalCtaTitle') || finalCall.title}</h2>
      <p>{t('finalCtaDescription') || finalCall.description}</p>
      <Button>{t('finalCtaButton')}</Button>
    </section>
  )
}
