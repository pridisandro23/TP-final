import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
    //<BrowserRouter> es un componente que nos habilita a usar las herramientas del react-router
    
    
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
