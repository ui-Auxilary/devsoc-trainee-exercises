import Signup from 'components/Buttons/Signup'
import './Header.css'
import Login from 'components/Buttons/Login'
import JoinCsepal from 'components/Buttons/JoinCsepal'

export default function Header() {
  return (
    <div className='header'>
      <JoinCsepal />
      <Login />
      <Signup />
    </div>
  )
}
