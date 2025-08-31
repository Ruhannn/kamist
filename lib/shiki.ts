import {
  bundledLanguages,
  getSingletonHighlighter,
  type BundledLanguage,
} from "shiki";

const highlighter = await getSingletonHighlighter({
themes: [
import('shiki/themes/catppuccin-mocha.mjs'),
import('shiki/themes/catppuccin-latte.mjs'),
],
langs: Object.keys(bundledLanguages),
})

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
