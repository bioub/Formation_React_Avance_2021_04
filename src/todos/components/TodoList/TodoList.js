import { PureComponent } from 'react';

import TodoCount from '../TodoCount/TodoCount';
import TodoItem from '../TodoItem/TodoItem';

export default class TodoList extends PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   return this.props.items !== nextProps.items;
  // }
  render() {
    console.log('render TodoList');
    const { count, items, onDeleteItem, onUpdateItem } = this.props;
    return (
      <div>
        <div className="TodoList">
          {items.map((it) => (
            <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem} />
          ))}
        </div>
        <TodoCount count={count} />
      </div>
    );
  }
}
