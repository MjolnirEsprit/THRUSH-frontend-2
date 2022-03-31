export default function Button({
  children,
  className,
  hoverable = true,
  variant = "orange",
  ...rest
}) {
  const variants = {
    white: `text-black bg-white`,
    orange: `text-white bg-orange-600 ${hoverable && "hover:bg-orange-700"}`,
    lightOrange: `text-orange-700 bg-orange-100 ${
      hoverable && "hover:bg-orange-200"
    }`,
    red: `text-white bg-red-600 ${hoverable && "hover:bg-red-700"}`,
  };

  return (
    <button
      {...rest}
      className={`rounded-md border p-2 text-base font-medium disabled:cursor-not-allowed disabled:opacity-50 xs:px-8 xs:py-3 ${className} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
