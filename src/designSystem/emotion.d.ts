/**
 * @format
 */

import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      /** --------------------
       *   BACKGROUND COLORS
       *  --------------------
       */
      backgroundPrimary: string;

      /** --------------------
       *      TEXT COLORS
       *  --------------------
       */
      text: {
        primary: string;
        secondary: string;
        placeholder: string;
      };
    };

    text: {
      fontFamily: string;
      size: {
        header: string;
        subheader: string;
        body: string;
      };
    };

    spacing: {
      none: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
  }
}
