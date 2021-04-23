import Counter from '../components/Counter/Counter';
import Select from './Select';

const { useState, useCallback } = require('react');

function Optim() {
  const [selectedColor, setSelectorColor] = useState('Vert');
  // const [colors, setColors] = useState(['Rouge', 'Vert', 'Bleu']);
  const [colors, setColors] = useState((new Array(3000)).fill('').map((v, i) => 'Item ' + i));
  const [inputValue, setInputValue] = useState('');

  // champ non-controllé (React n'a pas la main sur son contenu)
  // const inputElRef = useRef();
  // inputElRef.current sera l'élément HTMLInputElement
  // quand le DOM sera mis à jour

  // const onDeleteMemo = useMemo(() => (item) => { setColors(colors.filter((el)=> el !== item)) }, [colors]);
  // pour simplifier on peut utiliser useCallback
  const onDeleteMemo = useCallback(
    (item) => {
      setColors(colors.filter((el) => el !== item));
    },
    [colors],
  );

  const onSelectMemo = useCallback((item) => setSelectorColor(item), []);

  return (
    <div className="Optim">
      {/* <input ref={inputElRef} /> */}
      {/* <button onClick={() => setColors([...colors, inputElRef.current.value])}>+</button> */}
      <input
        value={inputValue}
        onChange={(e) => {setInputValue(e.target.value); console.log(e)}}
      />
      <button
        onClick={() => {
          // avec memo, le changement doit etre immuable
          import('./immutable').then(({ addArray }) => {
            setColors(addArray(colors, inputValue));
          });

          // muable (ne provoque pas de nouveau render de Select)
          // colors.push(inputValue);
          // setColors(colors);
        }}
      >
        +
      </button>
      <Select
        selected={selectedColor}
        items={colors}
        onSelect={onSelectMemo}
        onDelete={onDeleteMemo}
      />

      <h2 className="selected">Render Props</h2>
      {/* <Counter component={({count}) => <b>{count}</b>} /> */}
      <Counter>
        {({count}) => <b>{count}</b>}
      </Counter>
    </div>
  );
}

export default Optim;
