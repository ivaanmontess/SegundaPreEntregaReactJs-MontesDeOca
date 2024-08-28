import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h1>Error 404, pagina no encontrada</h1>

        <Link to={"/"}>Inicio con Link</Link>
    </div>
  )
}

export default Error