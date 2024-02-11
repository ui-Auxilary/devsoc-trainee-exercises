import ItemBox from 'components/ItemBox/ItemBox';
import './ItemList.css';

import items from 'mockItemData.json'

export default function ItemList() {
    return (
    <div className='listContainer'>
        {items['items'].map(item => <ItemBox itemid={item.id} name={item.name} value={item.value}/>)}
    </div>
  )
}
