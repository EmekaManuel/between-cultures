import Image from "next/image";
import React from "react";

const AppLogo = () => {
  return (
    <Image
      src="/app-logo-trans.png"
      alt="Between Cultures Logo"
      width={60}
      height={60}
      className="w-full h-full object-cover"
    />
  );
};

export default AppLogo;
