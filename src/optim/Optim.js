import Select from './Select';

const { useState, useCallback } = require('react');

function Optim() {
  const [colors, setColors] = useState((new Array(3)).fill('').map((v, i) => 'Item ' + i));
  const [inputValue, setInputValue] = useState('');

  // champ non-controllé (React n'a pas la main sur son contenu)
  // const inputElRef = useRef();
  // inputElRef.current sera l'élément HTMLInputElement
  // quand le DOM sera mis à jour

  // const onDeleteMemo = useMemo(() => (item) => { setColors(colors.filter((el)=> el !== item)) }, [colors]);
  // pour simplifier on peut utiliser useCallback
  const onDeleteMemo = useCallback((item) => { setColors(colors.filter((el)=> el !== item)) }, [colors]);

  return (
    <div className="Optim">
      {/* <input ref={inputElRef} /> */}
      {/* <button onClick={() => setColors([...colors, inputElRef.current.value])}>+</button> */}
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          // avec memo, le changement doit etre immuable
          setColors([...colors, inputValue]);

          // muable (ne provoque pas de nouveau render de Select)
          // colors.push(inputValue);
          // setColors(colors);

        }}
      >
        +
      </button>
      <Select items={colors} onDelete={onDeleteMemo} />
    </div>
  );
}

export default Optim;
