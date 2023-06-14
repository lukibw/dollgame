import { useLocation } from "wouter";
import { Navigation } from "./styled";
import { NavLinks } from "./NavLinks";
import { NavMenu } from "./NavMenu";
import { useMediaQuery } from "../utils";

export function Nav() {
  const [location] = useLocation();
  const showMenu = useMediaQuery("(max-width: 750px)");
  if (showMenu) {
    return <NavMenu location={location} />;
  }
  return (
    <Navigation>
      <NavLinks location={location} />
    </Navigation>
  );
}
