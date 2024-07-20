export default function Modal({
  title,
  open,
  children,
  onClose,
  width = '30',
}) {
  return (
    <div>
      {open ? (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-30"></div>
          <div className="fixed inset-0 z-40" onClick={onClose}>
            <div className="flex justify-center items-center min-h-screen">
              <div
                className="bg-white rounded-lg shadow-md"
                style={{ width: `${width}rem` }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-4 border-b">
                  <button className="invisible">&#10005;</button>
                  <h5 className="text-2xl font-medium">{title}</h5>
                  <button onClick={onClose}>&#10005;</button>
                </div>
                <div className="p-4">{children}</div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
