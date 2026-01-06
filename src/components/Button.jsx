export default function Button({ 
  children, 
  onClick, 
  type = "button", 
  variant = "primary", // primary, secondary, outline
  className = "",
  disabled = false,
  isLoading = false
}) {
  
  // Definição de estilos base e variantes usando Tailwind
  const baseStyles = "flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-200 outline-none active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-indigo-600 text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300",
    secondary: "bg-slate-100 text-slate-600 hover:bg-slate-200",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {isLoading ? (
        <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : children}
    </button>
  );
}