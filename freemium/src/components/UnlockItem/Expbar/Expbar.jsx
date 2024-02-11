import { useUserContext } from 'context/UserContext'
import './Expbar.css'

export default function Expbar() {
  const {exp} = useUserContext();

  return (
    <div className='expbar'>
        <div className='progress' style={{width: `${exp}px`}}></div>
    </div>
  )
}
