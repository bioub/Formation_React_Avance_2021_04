import { memo, useEffect, useRef, useState } from "react";

import SelectItem from "./SelectItem";

function Select({selected = '', items= [], onSelect, onDelete, deletable = false}) {
  const hostRef = useRef();
  useEffect(() => {
    function callback(event) {
      console.log('document click')
      // ES2020 : Optional chaining
      if (!hostRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    // setInterval
    // new WebSocket
    document.addEventListener('click', callback);
    return () => {
      // clearInterval
      // ws.close()
      document.removeEventListener('click', callback);
    }
  }, [])
  console.log('render Select');
  const [open, setOpen] = useState(false);
  return <div ref={hostRef} className="Select" onClick={(event) => setOpen(!open)}>
    <div className="selected">{selected}</div>
    {open && <div className="items">
      {items.map((it) => <SelectItem item={it} key={it} onSelect={onSelect} onDelete={onDelete} deletable={deletable} />)}
    </div>}
  </div>;
}

export default memo(Select);
