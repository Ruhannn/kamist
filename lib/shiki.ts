import {
    bundledLanguages,
    createHighlighter,
    type BundledLanguage,
} from "shiki";

const highlighter = await createHighlighter({
  langs: Object.keys(bundledLanguages),
  themes: ['catppuccin-latte','catppuccin-mocha'],
});

export async function highlight(code: string, lang: string) {
  if (!highlighter.getLoadedLanguages().includes(lang as BundledLanguage)) {
    lang = "text";
  }

  return highlighter.codeToHtml(code, {
    lang,
    themes: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  });
}
