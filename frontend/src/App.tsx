import { MantineProvider } from "@mantine/core";
import { Router } from "./pages/Router";
import { GlobalFonts } from "./theme/GlobalFonts";
import { mainTheme } from "./theme/mainTheme";
import { NotificationsProvider } from "@mantine/notifications";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={mainTheme}>
      <GlobalFonts />
      <NotificationsProvider
        autoClose={5000}
        limit={5}
        position="top-right"
        zIndex={2048}
      >
        <Router />
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default App;
