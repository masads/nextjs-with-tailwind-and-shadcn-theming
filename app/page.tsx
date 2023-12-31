import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants,Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          Theming Wrapped in a Tailwind Plugin/Preset with shadcn/ui
        </h1>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
      <div className="flex gap-4">
        <Button >Primary</Button>
        <Button variant="secondary" className="animate-in zoom-in-50" >Secondary</Button>
        <Button variant="destructive" >Destructive</Button>
        <Button variant="ghost" >Ghost</Button>
        <Button variant="outline" >Outline</Button>
        <Button variant="link" >Link</Button>
      </div>
    </section>
  )
}
