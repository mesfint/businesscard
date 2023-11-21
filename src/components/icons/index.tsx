import React from "react";

import Email from "./Email";
import Phone from "./Phone";
import Twitter from "./Twitter";
import Github from "./Github";
import Linkedin from "./Linkedin";
import Rectangle from "./Rectangle";
import Square from "./Square";
import Intersect from "./Intersect";
import RectangleLong from "./RectangleLong";
import Eclipse from "./Eclipse";

type IconName =
  | "Email"
  | "Phone"
  | "Twitter"
  | "Github"
  | "Linkedin"
  | "Rectangle"
  | "Square"
  | "Intersect"
  | "RectangleLong"
  | "Eclipse";

const Icons: Record<IconName, JSX.Element> = {
  Email: <Email />,
  Phone: <Phone />,
  Twitter: <Twitter />,
  Github: <Github />,
  Linkedin: <Linkedin />,
  Rectangle: <Rectangle />,
  Square: <Square />,
  Intersect: <Intersect />,
  RectangleLong: <RectangleLong />,
  Eclipse: <Eclipse />,
};

type IconProps = {
  //the name is the key values of the Icons Type
  name: keyof typeof Icons;
  className?: string;
};

function Icon({ name, className }: IconProps) {
  const iconElement = Icons[name];

  if (React.isValidElement(iconElement)) {
    // Apply the className if the iconElement is a valid React element
    return React.cloneElement(iconElement as React.ReactElement, { className });
  }

  return <div className={className}>Icon not found</div>;
}

export default Icon;
