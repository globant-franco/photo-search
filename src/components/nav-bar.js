/** @jsxImportSource @emotion/react */
import logo from '../images/logo.png'

export default function NavBar() {
  return (
    <nav css={{height: '10vh', display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="Logo" css={{marginLeft: '5vw', width: 'auto', height: 'fit-content'}}/>
      <span css={{
        fontFamily: 'Jua',
        fontSize: '1.5rem',
        lineHeight: '2.5rem',
        color: '#AB7E57',
        marginLeft: '3vw'
      }}>
        Photo Search
      </span>
    </nav>
  )
}
