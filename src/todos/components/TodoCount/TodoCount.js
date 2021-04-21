export default function TodoCount({ count }) {
  return (
    <div className="TodoCount">
      {count > 1 ? count + ' todos' : count + ' todo'} remaining
    </div>
  );
}
