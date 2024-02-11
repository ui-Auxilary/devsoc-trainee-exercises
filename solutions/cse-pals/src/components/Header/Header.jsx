import Signup from 'components/Buttons/Signup'
import styles from './Header.module.css'
import Login from 'components/Buttons/Login'
import JoinCsepal from 'components/Buttons/JoinCsepal'

export default function Header() {
  return (
    <div className={styles.header}>
      <JoinCsepal />
      <Login />
      <Signup />
    </div>
  )
}
