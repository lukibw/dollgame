export interface Theme {
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    success: string;
    error: string;
  };
  fonts: {
    heading: string;
    body: string;
    button: string;
  };
}

export const theme: Theme = {
  colors: {
    background: "#e0e2db",
    text: "#2e3836",
    primary: "#33475b",
    secondary: "#73454e",
    success: "#337045",
    error: "#8f2c28",
  },
  fonts: {
    heading: "'Dancing Script'",
    body: "'Source Sans Pro'",
    button: "'Raleway'",
  },
};
