export default function Form({ title, children, width = '30' }) {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="bg-white rounded-lg shadow-md"
          style={{ width: `${width}rem` }}
        >
          <div className="flex justify-center items-center p-4 border-b">
            <h5 className="text-2xl font-medium text-purple">{title}</h5>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
