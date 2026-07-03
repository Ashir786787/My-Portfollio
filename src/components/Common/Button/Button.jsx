function Button({ children, variant = "primary", onClick }) {
  const base = "px-7 py-3 rounded-xl font-semibold transition-all duration-300";
  const styles = {
    primary: "bg-violet-600 hover:bg-violet-700 text-white",
    secondary: "border border-violet-500 hover:bg-violet-600 text-white",
  };
  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
