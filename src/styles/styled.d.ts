import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      orange: string;
      white: string;
      gray: string;
      grayHard: string;
      shape: string;
      blackMedium: string;
      background: string;
      inputs: string;

      error: string;
    };
  }
}
