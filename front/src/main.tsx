import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import './scss/index.scss'
import { Provider } from 'react-redux'
import store from './services/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
