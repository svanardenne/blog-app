// Sets breakpoint variables
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptopS: "1024px",
  laptopM: "1280px",
  laptopL: "1440px",
  desktopS: "1536px",
  desktop: "2560px",
};

// Constructs media queries
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptopS: `(min-width: ${size.laptopS})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktopS: `(min-width: ${size.desktopS})`,
  desktop: `(min-width: ${size.desktop})`,
};
