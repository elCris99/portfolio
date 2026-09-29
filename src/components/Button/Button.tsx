import "./Button.scss";

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "accent";
};

function Button({ children, variant = "primary", ...props }: ButtonProps) {
  return (
    <button className="button" data-type={variant} {...props}>
      {children}
    </button>
  );
}

export default Button;
