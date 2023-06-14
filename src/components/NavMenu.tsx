import { NavLinks } from "./NavLinks";
import { MenuButton, MenuNavigation } from "./styled";
import { MenuIcon } from "../assets";
import { useEffect, useState } from "react";

export interface NavMenuProps {
  location: string;
}

export function NavMenu({ location }: NavMenuProps) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [location]);
  return (
    <>
      <MenuNavigation show={open}>
        <NavLinks location={location} />
      </MenuNavigation>
      <MenuButton onClick={() => setOpen((open) => !open)}>
        <MenuIcon />
      </MenuButton>
    </>
  );
}
