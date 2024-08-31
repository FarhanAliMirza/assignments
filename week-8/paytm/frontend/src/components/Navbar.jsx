import React from "react";
import Logo from "../assets/logo.png";
import { Button, Heading, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="flex w-screen justify-between p-3">
      <div className="flex items-center">
        <Image
          src={Logo}
            boxSize="50px"
          alt="paytm logo"
        />
        <Heading size="md" ml={"3"}>Paytm</Heading>
      </div>
      <Button>Sign Out</Button>
    </div>
  );
};

export default Navbar;