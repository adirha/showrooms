import { Global } from "@mantine/core";

export const GlobalFonts = () => {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "IBMPlexSerif",
            src: `url('/assets/fonts/IBMPlexSerif-Regular.ttf') format("trueType")`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "IBMPlexSans",
            src: `url('/assets/fonts/IBMPlexSans-Regular.ttf') format("trueType")`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "IBMPlexSans",
            src: `url('/assets/fonts/IBMPlexSans-SemiBold.ttf') format("trueType")`,
            fontWeight: 600,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "proximanova",
            src: `url('/assets/fonts/proximanova_bold.otf') format("trueType")`,
            fontWeight: 700,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "proximanova",
            src: `url('/assets/fonts/proximanova_regular.ttf') format("trueType")`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
};
