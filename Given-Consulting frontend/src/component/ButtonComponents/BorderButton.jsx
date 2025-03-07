const Button = ({ text, color }) => {
  return (
    <button
      className={`w-full relative px-3 sm:px-8 py-2 rounded-md bg-transparent isolation-auto z-10 border-2 border-btn-yellow before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-btn-yellow before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 ${
        color === 'black' ? 'text-black ' : 'text-white hover:text-black'
      }`}
    >
      {text || 'Button'}
    </button>
  );
};
export default Button;

export const FilledButton = ({ text, color }) => {
  return (
    <button
      className={`w-full relative px-3 sm:px-8 py-2 rounded-md border-2 border-btn-yellow  overflow-hidden isolation-auto z-10 before:absolute before:w-full before:h-full before:bg-btn-yellow before:right-0 before:transition-all  before:hover:right-[130%]  before:rounded-full before:-z-10 before:scale-150 before:duration-700 ${
        color === 'black' && 'text-black hover:text-text-color'
      }`}
    >
      <span className='relative z-10'>{text || 'Signup'}</span>
    </button>
  );
};
