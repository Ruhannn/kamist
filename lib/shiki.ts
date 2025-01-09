"use server"
import { codeToHtml } from 'shiki'


export async function highlight(code: string, lang: string) {

    const html = codeToHtml(code, {
        lang, themes: {
            light: "catppuccin-latte",
            dark: "catppuccin-mocha",
        },
    })

    return html
}