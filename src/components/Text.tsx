import clsx from "clsx";

type Variant = "heading-one" | "subheading-one" | "body-one" | "body-two";

type TextProps = {
  children: React.ReactNode | React.ReactNode[];
  variant: Variant;
  className?: string;
};

//type Record=> used to define the shape of an object
//This utility can be used to map the properties
// of a type to another type.

const variants: Record<Variant, string> = {
  "heading-one":
    "text-[46px] font-semibold leading-[55.2px] letter-spacing-[2px] font-poppins text-black",
  "subheading-one":
    "text-[19px] font-semibold leading-[30.4px] font-poppins  text-black",
  "body-one": "text-[16px] font-normal font-poppins   text-black",
  "body-two": "text-[16px] font-semibold font-poppins  text-black",
};

function Text({ children, variant = "body-one", className }: TextProps) {
  return (
    <>
      <p className={clsx(variants[variant], className)}>{children}</p>
    </>
  );
}

export default Text;
