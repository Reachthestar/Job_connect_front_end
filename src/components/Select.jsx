export default function Select(value, option, name, id) {
  return (
    <>
      <select name={name} id={id}>
        <option value={value}>{option}</option>
      </select>
    </>
  );
}
