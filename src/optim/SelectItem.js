function SelectItem({item = '', onSelect = () => {}, onDelete = () => {}, deletable = false}) {
  // console.log('SelectItem');
  return <div className="SelectItem" onClick={() => onSelect(item)}>
    {item}
    {deletable && <button onClick={() => onDelete(item)}>-</button>}
  </div>;
}

export default SelectItem;
