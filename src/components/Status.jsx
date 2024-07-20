export default function Status({ type }) {
  return (
    <div
      className={`${
        type === 'FULL_TIME' ? 'bg-light-blue' : 'bg-light-yellow'
      } px-3 rounded-full`}
    >
      <p
        className={`${
          type === 'FULL_TIME' ? 'text-blue' : 'text-yellow'
        } text-[12px]`}
      >
        {type}
      </p>
    </div>
  );
}
