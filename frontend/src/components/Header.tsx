import {
  ActionIcon,
  Button,
  Flex,
  Header as MantineHeader,
  Menu,
  Text,
  TextInput,
  createStyles,
  rem,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconSearch,
  IconTriangleInvertedFilled,
} from "@tabler/icons-react";

const useStyles = createStyles(({ fontSizes }) => ({
  headerContainer: {
    paddingRight: rem("38px"),
    paddingLeft: rem("38px"),
  },
  innerContainer: {
    gap: rem("52px"),
    height: "100%",
    alignItems: "center",
    "> div:first-of-type": {
      gap: rem("31px"),
    },
  },
  boldText: {
    fontWeight: 700,
    fontSize: fontSizes.xl,
  },
  lightText: {
    fontWeight: 400,
    fontSize: fontSizes.md,
  },
}));

interface IHeaderProps {
  logo: string;
}

export const Header = ({ logo }: IHeaderProps) => {
  const {
    classes: { headerContainer, innerContainer, boldText, lightText },
  } = useStyles();
  return (
    <MantineHeader className={headerContainer} height={78}>
      <Flex className={innerContainer}>
        <Flex>
          <ActionIcon variant="transparent">
            <IconArrowLeft size="24px" strokeWidth="1.5px" />
          </ActionIcon>
          <Text className={boldText}>{logo}</Text>
        </Flex>
        <Flex align="center" justify="space-between" sx={{ flexGrow: 1 }}>
          <Menu zIndex={2000}>
            <Menu.Target>
              <Button
                color="gray"
                variant="white"
                rightIcon={<IconTriangleInvertedFilled size={9} />}
              >
                <Text className={lightText}>Brands</Text>
              </Button>
            </Menu.Target>
            <Menu.Dropdown sx={{ zIndex: 2000 }}>
              {/* TBD: When there will be multiple brands <Menu.Item sx={{ zIndex: 2000 }}></Menu.Item> */}
            </Menu.Dropdown>
          </Menu>
          <TextInput
            variant="unstyled"
            rightSection={<IconSearch size="24px" color="#474F58" />}
          />
        </Flex>
      </Flex>
    </MantineHeader>
  );
};
