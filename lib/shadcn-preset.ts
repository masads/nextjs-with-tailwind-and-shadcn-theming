import type { Config } from "tailwindcss";
import { shadcnPlugin } from "./shadcn-plugin";
import animatePlugin from 'tailwindcss-animate'

export const shadcnPreset = {
    content: [],
    plugins: [shadcnPlugin,animatePlugin],
    darkMode: ["class"],
} satisfies Config