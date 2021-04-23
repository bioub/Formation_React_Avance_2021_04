import { shallow } from "enzyme"

import TodoItem from "./TodoItem";

test('TodoItem', () => {

  const onDeleteItem = jest.fn();

  const item = { id: '123', text: 'ABC', completed: false };
  const wrapper = shallow(<TodoItem item={item} onDeleteItem={onDeleteItem} />);

  expect(wrapper.find('span').text().includes('ABC')).toBe(true);

  // container.querySelector('button').dispatchEvent(new MouseEvent('click'));
  wrapper.find('button').simulate('click');

  expect(onDeleteItem).toHaveBeenCalledWith(item);
});
