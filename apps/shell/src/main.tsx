import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from 'shared/components/Button'
import RemoteApp from 'remote1/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>Shell App <Button>My Custom Button</Button> <RemoteApp /> </div>
  </React.StrictMode>,
)
