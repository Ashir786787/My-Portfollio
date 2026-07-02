function Button({ children }) {
  return (
    <button
      className="
      px-8
      py-3
      rounded-xl
      bg-primary
      text-white
      font-semibold
      hover:scale-105
      duration-300
      cursor-pointer
      "
    >
      {children}
    </button>
  );
}

export default Button;