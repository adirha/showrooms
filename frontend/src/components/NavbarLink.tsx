import { NavLink, createStyles } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { EventTypes, NavLink as NavLinkType } from "../generated/graphql";

interface INavbarLinkProps {
  link: NavLinkType;
  index: number;
  isLastItem: boolean;
  linksLength: number;
  createUserActivity: (to: string, eventType: EventTypes) => void;
}
interface IStylesProps extends INavbarLinkProps {
  isCurrentActive: boolean;
}

const useStyles = createStyles(
  (
    _,
    {
      index,
      linksLength = 1,
      isLastItem,
      isCurrentActive,
    }: Partial<IStylesProps>
  ) => ({
    navLink: {
      padding: 0,
      fontWeight: !index ? 600 : 400,
      marginBottom: linksLength > 1 && !isLastItem ? "15px" : "0",
      ".mantine-NavLink-label": {
        color: isCurrentActive ? "#1AC3F3" : "#474F58",
      },
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  })
);

export const NavbarLink = ({
  link: { to, title },
  index,
  isLastItem,
  linksLength,
  createUserActivity,
}: INavbarLinkProps) => {
  const { pathname } = useLocation();
  const isCurrentActive = pathname.includes(to);
  const {
    classes: { navLink },
  } = useStyles({ index, isLastItem, linksLength, isCurrentActive });
  return (
    <NavLink
      className={navLink}
      onMouseEnter={() => createUserActivity(to, EventTypes.BoardHovered)}
      onClick={() => createUserActivity(to, EventTypes.BoardClicked)}
      label={title}
      component={Link}
      to={to}
    />
  );
};
