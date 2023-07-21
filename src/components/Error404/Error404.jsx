import { Link } from "react-router-dom"
import './Error404.css'

const Error404 = () => {
  return (
    <div className="container">
      <h1>Oops! La página que buscas no se encuentra.</h1>
      <h2>Error 404</h2>
      <h3>Favor verifique ruta</h3>
    
      <Link to="/">Volver al Home</Link>
    </div>
  )
}

export default Error404
