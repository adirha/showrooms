import { AppShell, rem } from "@mantine/core";
import { Header } from "./Header";

interface IMainLayoutProps {
  navbar: React.ReactElement;
  children: React.ReactNode;
  logo: string; // Should be an image but the logo could not be exported from the provided file
}

export const MainLayout = ({ navbar, children, logo }: IMainLayoutProps) => {
  return (
    <AppShell padding={rem(90)} header={<Header logo={logo} />} navbar={navbar}>
      {children}
    </AppShell>
  );
};
