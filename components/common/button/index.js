export default function Button({
  children,
  className,
  hoverable = true,
  variant = "orange",
  ...rest
}) {
  const variants = {
    orange: `text-white bg-orange-600 ${hoverable && "hover:bg-orange-700"}`,
    lightOrange: `text-orange-700 bg-orange-100 ${hoverable && "hover:bg-orange-200"}`,
    red: `text-white bg-red-600 ${hoverable && "hover:bg-red-700"}`,
  };

  return (
    <button
      {...rest}
      className={`disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 border rounded-md text-base font-medium ${className} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
