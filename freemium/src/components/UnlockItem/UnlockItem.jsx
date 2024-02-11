import ItemList from 'components/ItemList'
import Expbar from './Expbar'
import './UnlockItem.css'
import Optopus from 'components/Optopus'
import { useUpdateUserContext } from 'context/UserContext'

export default function UnlockItem() {
  const {updateExp} = useUpdateUserContext();

  return (
    <div className='unlockContainer'>
      <ItemList />
      <Expbar />
      <div className='expController'>
        <button onClick={() => updateExp(-20)}>Minus EXP</button>
        <button onClick={() => updateExp(20)}>Add EXP</button>
      </div> 
    </div>
  )
}
