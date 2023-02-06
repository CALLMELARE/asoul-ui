import { addColorAlpha } from "./color";

export default function useTheme(theme: string) {
  if (document.body.classList.contains(theme)) {
    document.body.classList.remove(theme);
  } else {
    document.body.classList.add(theme);
  }
}

export type ThemeTypes = {
  variable: string;
  value: string;
};

export const applyTheme = (themes: Array<ThemeTypes> = []) => {
  const rootStyle = document.getElementsByTagName("body")[0].style;
  themes.forEach((item, index) => {
    const oldValue = rootStyle.getPropertyValue(item.variable);
    if (!oldValue) {
      // add new variable
      console.log(
        `[ASoul] Theme: Add new variable ${item.variable} : ${item.value}`
      );
    } else if (oldValue !== item.value) {
      // overwrite existing variable
      console.log(
        `[ASoul] Theme: Overwrite variable ${item.variable} : ${item.value}`
      );
    }
    rootStyle.setProperty(item.variable, item.value);
  });
};

export const generateDerivedCSSVariables = (theme: ThemeTypes) => {
  let arr: ThemeTypes[] = [];
  const hex = theme.value.substring(1);

  if (theme.variable === "--asoul-theme-color") {
    arr.push(theme);
    [90, 80, 70, 60, 50, 40, 30, 20, 10].forEach((alpha) => {
      arr.push({
        variable: `--asoul-theme-color-${alpha}`,
        value: addColorAlpha(hex, alpha / 100),
      });
    });
  }

  if (theme.variable === "--asoul-primary-color") {
    arr.push(theme);
    [12].forEach((alpha) => {
      arr.push({
        variable: `--asoul-primary-color-${alpha}`,
        value: addColorAlpha(hex, alpha / 100),
      });
    });
  }

  if (theme.variable === "--asoul-secondary-color") {
    arr.push(theme);
    [90, 80, 30].forEach((alpha) => {
      arr.push({
        variable: `--asoul-secondary-color-${alpha}`,
        value: addColorAlpha(hex, alpha / 100),
      });
    });
  }

  if (theme.variable === "--asoul-sub-color") {
    arr.push(theme);
    [90, 80, 60].forEach((alpha) => {
      arr.push({
        variable: `--asoul-sub-color-${alpha}`,
        value: addColorAlpha(hex, alpha / 100),
      });
    });
  }

  if (theme.variable === "--asoul-invert-color") {
    arr.push(theme);
    [30].forEach((alpha) => {
      arr.push({
        variable: `--asoul-invert-color-${alpha}`,
        value: addColorAlpha(hex, alpha / 100),
      });
    });
  }

  return arr;
};

export const generateAllDerivedCSSVariables = (
  themes: Array<ThemeTypes> = []
) => {
  let arr: ThemeTypes[] = [];
  themes.forEach((theme) => {
    arr.push(...generateDerivedCSSVariables(theme));
  });
  return arr;
};
