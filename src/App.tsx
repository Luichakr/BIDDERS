import './App.css'
import { AppRouter } from './app/AppRouter'
import { AuthProvider } from './shared/auth/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
