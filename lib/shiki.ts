import { Highlighter, createHighlighter } from 'shiki'

let highlighter: Highlighter
export async function highlight(code: string, lang: string) {
    if (!highlighter) {
        highlighter = await createHighlighter({
            langs: [lang, "markdown", "js", "ts", "html", "jsx", "tsx", "css"], //add language
            themes: ["catppuccin-latte", "catppuccin-mocha"]

        })
    }
    const html = highlighter.codeToHtml(code, {
        lang, themes: {
            light: "catppuccin-latte",
            dark: "catppuccin-mocha",
        },
    })

    return html
}