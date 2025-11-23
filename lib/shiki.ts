import { codeToHtml } from "shiki";

export async function highlight(code: string, lang: string) {
  const themes = {
    light: "catppuccin-latte",
    dark: "catppuccin-mocha",
  };

  try {
    return await codeToHtml(code, { lang, themes });
  } catch {
    return await codeToHtml(code, { lang: "txt", themes });
  }
}

// export async function highlight(code: string, lang: string) {
//   try {
//     if (hljs.getLanguage(lang)) {
//       return hljs.highlight(code, { language: lang }).value;
//     }
//   } catch (e) {
//   }

//   return hljs.highlightAuto(code).value;
// }
