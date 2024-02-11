import './Summon.css'
import Egg from 'assets/egg.svg'

export default function Summon() {
  return (
    <div className='summonContainer'>
        <div className='summonWrapper'>
            <div className='summon'>Summon</div>
            <div style={{position: 'absolute'}}>
                <span className='eggCounter'>0</span>
                <div className='summonBg'>   
                    <img className='egg' src={Egg} />
                </div>
            </div>
        </div>
    </div>
  )
}
