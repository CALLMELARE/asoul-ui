export default function useTheme(theme: string) {
  if (document.body.classList.contains(theme)) {
    document.body.classList.remove(theme);
  } else {
    document.body.classList.add(theme);
  }
}
