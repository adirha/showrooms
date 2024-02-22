import {
  Navbar as MantineNavbar,
  Stack,
  createStyles,
  rem,
} from "@mantine/core";
import {
  Board,
  EventTypes,
  NavLink as NavLinkType,
  useCreateUserActivityMutation,
} from "../generated/graphql";
import { NavbarLink } from "./NavbarLink";

const useStyles = createStyles(() => ({
  navbarContainer: {
    padding: `${rem(60)} ${rem(32)}`,
  },
  linksWrapper: {
    gap: 0,
    paddingBottom: rem(25),
    paddingTop: rem(25),
    borderBottom: "1px solid #EAECEE",
  },
}));

interface INavbarProps {
  navLinks: NavLinkType[][];
  currentPage: string;
  boards: Board[];
}

export const Navbar = ({ navLinks, currentPage, boards }: INavbarProps) => {
  const {
    classes: { navbarContainer, linksWrapper },
  } = useStyles();
  const [createUserActivityMutation] = useCreateUserActivityMutation();

  const getCurrentBoardId = (path: string) =>
    boards.find(({ assets }) => {
      const currentBoardAsset = assets?.find(({ link = "" }) =>
        link?.includes(path)
      );
      return currentBoardAsset;
    })?.id as string;

  const createUserActivity = (to: string, eventType: EventTypes) => {
    createUserActivityMutation({
      variables: {
        input: {
          page: currentPage,
          data: { boardId: getCurrentBoardId(to) },
          eventType,
        },
      },
    });
  };

  return (
    <MantineNavbar className={navbarContainer} width={{ base: 240 }}>
      {navLinks.map((links, index) => (
        <Stack key={index} className={linksWrapper}>
          {links.map((navLink, index) => {
            const isLastItem = index === links.length - 1;
            return (
              <NavbarLink
                key={index}
                link={navLink}
                index={index}
                isLastItem={isLastItem}
                linksLength={links.length}
                createUserActivity={createUserActivity}
              />
            );
          })}
        </Stack>
      ))}
    </MantineNavbar>
  );
};
