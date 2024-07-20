import { LoaderIcon } from '../icons';

export default function Spinner({ transparent }) {
  return (
    <>
      <div
        className={`fixed inset-0 gb-white z-40 ${
          transparent ? 'opacity-70' : ''
        }`}
      ></div>
      <div className="fixed inset-0 flex justify-center items-center z-50 animate-spin">
        <LoaderIcon className="fill-purple w-20 h-20" />
      </div>
    </>
  );
}
