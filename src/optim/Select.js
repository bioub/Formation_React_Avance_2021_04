import { memo } from "react";

import SelectItem from "./SelectItem";

function Select({items= [], onDelete}) {
  console.log('render Select');
  return <div className="Select">
    {items.map((it) => <SelectItem item={it} key={it} onDelete={onDelete} />)}
  </div>;
}

export default memo(Select);
