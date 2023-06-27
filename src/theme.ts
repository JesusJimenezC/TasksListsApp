import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles: { global: (props: any) => { body: { bg: string } } } = {
  global: (props) => ({
    body: {
      bg: mode("#DDE6ED", "#2E3840")(props),
    },
  }),
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme: Record<string, any> = extendTheme({ config, styles });

export default theme;
