import items from 'mockItemData.json'

export default function itemUnlock (itemId) {
    const filteredItems = items['items'].filter(item => item.id == itemId)

    if (filteredItems.length > 0) {
        console.log('Item found', filteredItems);
        return filteredItems[0]
    }
    return null;
}