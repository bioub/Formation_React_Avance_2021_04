import './TodoItem.css';

export default function TodoItem({ item, onDeleteItem, onUpdateItem }) {
  return (
    <div className="TodoItem">
      <input type="checkbox" value={item.completed} onChange={(event) => onUpdateItem({...item, completed: event.target.checked})} />
      <span>{item.text}</span>
      <button onClick={() => onDeleteItem(item)}>-</button>
    </div>
  );
}
