/**
 * @jsx jsx
 * @format
 */

import * as React from "react";
import {RecoilRoot} from "recoil";
import Text from "./component/Text";
// eslint-disable-next-line
import {css, jsx, Theme, ThemeProvider} from "@emotion/react";
import {DefaultTheme} from "./designSystem/theme/DefaultTheme";

export default function App() {
  const theme = DefaultTheme;
  const styles = getStyles(theme);
  return (
    <ThemeProvider theme={theme}>
      <div css={styles.root}>
        <RecoilRoot>
          <Text size="header">Header Text</Text>
          <Text size="subheader" color="secondary">
            Subheader Text
          </Text>
          <Text color="placeholder">Body Text</Text>
        </RecoilRoot>
      </div>
    </ThemeProvider>
  );
}

function getStyles(theme: Theme) {
  return {
    root: css`
      align-items: center;
      background-color: ${theme.color.backgroundPrimary};
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100vh;
      text-align: center;
    `,
  };
}
