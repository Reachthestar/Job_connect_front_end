const bgMap = {
  white: 'bg-slate-50 border border-purple',
  purple: 'bg-purple border border-slate-50',
  yellow: 'bg-[#EFAD3D]',
  gray: 'bg-gray-300 border border-gray-300',
  red: 'bg-red border border-red',
};

const colorMap = { white: 'text-white', purple: 'text-purple' };

const widthMap = {
  full: 'w-full',
};

export default function Button({
  children,
  bg = 'purple',
  color = 'white',
  width,
  onClick,
  px = '3',
  disabled,
}) {
  return (
    <button
      className={`px-${px} py-1.5 rounded-full ${bgMap[bg]} ${colorMap[color]} ${widthMap[width]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
