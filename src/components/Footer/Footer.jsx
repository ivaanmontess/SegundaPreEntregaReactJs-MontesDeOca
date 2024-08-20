import './Footer.css'
import {useState} from "react"

const Footer = () => {

  const [encendido, setEncendido] = useState(false)

  const cambiarEstado = () => {
    setEncendido (!encendido)

  }
  console.log(encendido)

  return (

    <div className='Footer'>
      Footer
      <button onClick={cambiarEstado}>
        {encendido ? 'apagar' : 'prender'}
      </button>
      </div>
  )
}

export default Footer 