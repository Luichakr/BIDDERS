import './App.css'
import { AppRouter } from './app/AppRouter'
import { I18nProvider } from './shared/i18n/I18nProvider'

function App() {
  return (
    <I18nProvider>
      <AppRouter />
    </I18nProvider>
  )
}

export default App
