function Button({ filter, activeFilter, handleClick, children }) {
  return (
    <button
      className={`px-4 py-2 border border-primary-800 ${
        filter === activeFilter
          ? "bg-primary-600 text-primary-50"
          : "hover:bg-primary-700"
      }`}
      onClick={() => handleClick(filter)}
    >
      {children}
    </button>
  );
}

export default Button;
