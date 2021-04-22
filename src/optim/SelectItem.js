function SelectItem({item = '', onDelete = () => {}}) {
  // console.log('SelectItem');
  return <div className="SelectItem">
    {item}
    <button onClick={() => onDelete(item)}>-</button>
  </div>;
}

export default SelectItem;
