// import { hideable } from "../../../hoc/hideable";

// export default hideable(function TodoCount({ count }) {
//   return (
//     <div className="TodoCount">
//       {count > 1 ? count + ' todos' : count + ' todo'} restantes
//     </div>
//   );
// }
// )


export default function TodoCount({ count }) {
  return (
    <div className="TodoCount">
      {count > 1 ? count + ' todos' : count + ' todo'} restantes
    </div>
  );
}

