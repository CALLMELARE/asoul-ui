export default function useTheme(theme: string) {
  window.document.documentElement.setAttribute("data-theme", theme);
}
