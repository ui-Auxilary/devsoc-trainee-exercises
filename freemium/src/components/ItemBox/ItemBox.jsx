import './ItemBox.css';
import summonEgg from 'assets/egg.svg'
import themeColour from 'assets/egg.svg'
import waveCoin from 'assets/egg.svg'

export default function ItemBox({itemid, name, value}) {
  return (
    <div className='itemBox'>
      <div className='innerBox'>
        <img className='item' src={`src/assets/${name}.svg`}/>
        {value ? <span className='itemValue'>{`x${value}`}</span> : null }
      </div>
      <div className='levelOuter'>
        <div className='levelInner'>
          <span className='level'>{itemid}</span>
        </div>
      </div>
    </div>
  )
}
