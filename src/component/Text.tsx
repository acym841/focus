/**
 * @jsx jsx
 * @format
 */

import * as React from "react";
// eslint-disable-next-line
import {css, jsx, Theme, useTheme} from "@emotion/react";
import {TextColor, TextSize} from "../designSystem/types/TextTypes";
import {Spacing} from "../designSystem/types/SpacingTypes";

type Props = {
  children: string;
  color?: TextColor;
  size?: TextSize;
  margin?: Spacing;
};

export default function Text({
  children,
  color = "primary",
  size = "body",
  margin = "xs",
}: Props) {
  const theme = useTheme();
  const styles = getStyles(theme);
  const colorStyles = getColorStyles(theme, color);
  const sizeStyles = getSizeStyles(theme, size);
  const spacingStyles = getSpacingStyles(theme, margin);

  return (
    <div css={[styles.root, colorStyles, sizeStyles, spacingStyles]}>
      {children}
    </div>
  );
}

function getColorStyles(theme: Theme, color: TextColor) {
  return css`
    color: ${theme.color.text[color]};
  `;
}

function getSizeStyles(theme: Theme, size: TextSize) {
  return css`
    font-size: ${theme.text.size[size]}px;
  `;
}

function getSpacingStyles(theme: Theme, margin: Spacing) {
  return css`
    margin: ${theme.spacing[margin]}px;
  `;
}

function getStyles(theme: Theme) {
  return {
    root: css`
      font-family: ${theme.text.fontFamily};
    `,
  };
}
