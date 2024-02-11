import Octopus from 'assets/octopus.svg'
import waveCoin from 'assets/waveCoin.svg'
import './Optopus.css';

export default function Optopus() {
  return (
    <div className='optopusContainer'>
      <div className='optopusLeft'>
        <span className='summonTitle'>Op-topus</span>
        <div className='optopusBox'>
          <img src={Octopus}/>
        </div>
      </div>
      <div className='optopusRight'>
          <span className='summonTag'>Unlock Op-topus</span>
          <div className='summonCost'>
            <img src={waveCoin}/>
            <span>1000</span>
          </div>
      </div>
    </div>
  )
}
