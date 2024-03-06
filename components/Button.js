export default function Button({ children, className, ...rest }) {
  return (
    <button
      className={`bg-[#000080] rounded-full text-white font-bold ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
