import { MantineThemeOverride } from "@mantine/core";

export const mainTheme: MantineThemeOverride = {
  fontFamily: "IBMPlexSans",
  headings: {
    fontFamily: "IBMPlexSans",
  },
  components: {
    Header: {
      styles: {
        root: {
          backgroundColor: "#FCFCFC",
        },
      },
    },
    Navbar: {
      styles: {
        root: {
          backgroundColor: "#FCFCFC",
        },
      },
    },
    AppShell: {
      styles: {
        root: {
          backgroundColor: "#FCFCFC",
        },
      },
    },
    Text: {
      styles: {
        root: {
          color: "#474F58",
        },
      },
    },
  },
  colorScheme: "light",
};
