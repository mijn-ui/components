"use client"

import { useState } from "react"
import Link from "next/link"
import { TopRightRadialGradient } from "@/app/components/decorators/gradient-bg"
import Logo from "@/app/components/logo"
import ThemeToggler from "@/app/components/theme-toggler"
import ClickAwayListener from "@/app/utils/click-away-listener"
import { Badge } from "@mijn-ui/react-badge"
import { Button, buttonStyles } from "@mijn-ui/react-button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@mijn-ui/react-collapsible"
import { Separator } from "@mijn-ui/react-separator"
import { cn } from "@mijn-ui/react-utilities/shared"
import { SidebarTrigger } from "fumadocs-core/sidebar"
import { useSearchContext, useSidebar } from "fumadocs-ui/provider"
import {
  LuChevronDown,
  LuExternalLink,
  LuGithub,
  LuMenu,
  LuSearch,
  LuX,
} from "react-icons/lu"

const PAGES = [
  {
    title: "Documentation",
    href: "/docs",
  },
  {
    title: "Blocks",
    href: "/blocks",
  },
]

const GITHUB_URL = "https://github.com/mijn-ui/mijn-ui-react"

const Navbar = () => {
  const { setOpenSearch } = useSearchContext()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { open: isSidebarOpen } = useSidebar()

  const renderPages = PAGES.map((page) => (
    <Link
      key={page.title}
      className="text-sm text-neutral-text hover:text-secondary-text"
      href={page.href}
    >
      {page.title}
    </Link>
  ))

  return (
    <header className="sticky inset-x-0 top-0 z-50 h-[var(--navbar-height)] w-full flex-col items-center justify-center border-b bg-transparent backdrop-blur-md md:flex">
      <nav className="flex w-full items-center justify-between px-5 py-2">
        <div className="flex items-center gap-4">
          <Link href={"/"} className="flex  items-center gap-2 font-bold">
            <Logo className="size-5 items-center fill-fd-foreground" />
            MijnUI
          </Link>
          <Badge className="bg-primary/20 text-primary hover:bg-primary/20">
            v0.0.1
          </Badge>

          <div className="hidden gap-4 md:flex">{renderPages}</div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <Button
            onClick={() => setOpenSearch(true)}
            color={"accent"}
            variant={"outline"}
            size={"sm"}
            className="gap-2"
          >
            <LuSearch />
            <span className="inline-block text-neutral-text">Search...</span>
            <div className="ml-4 inline-flex h-5 gap-1 rounded-full border px-2 py-px">
              <kbd className="text-xxs">Ctrl+</kbd>
              <kbd className="text-xxs">K</kbd>
            </div>
          </Button>

          <Button color={"accent"} size={"sm"} className="border px-2" asChild>
            <Link target="_blank" href={GITHUB_URL}>
              <LuGithub size={18} />
            </Link>
          </Button>

          <ThemeToggler />
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setOpenSearch(true)}
            className="inline-flex size-8 items-center justify-center text-neutral-text transition duration-200 hover:text-secondary-text"
          >
            <LuSearch />
          </button>

          <ClickAwayListener onClickAway={() => setDropdownOpen(false)}>
            <Collapsible open={dropdownOpen} onOpenChange={setDropdownOpen}>
              <CollapsibleTrigger className="flex size-8 items-center justify-center text-neutral-text transition duration-200 hover:text-secondary-text">
                <LuChevronDown className="text-lg" />
              </CollapsibleTrigger>
              <CollapsibleContent className="top-[calc(var(--navbar-height)] absolute inset-x-0 mt-2 overflow-hidden bg-surface text-sm transition-[height] data-[state=closed]:animate-collapsible-collapse data-[state=open]:animate-collapsible-expand">
                <div className="relative flex w-full flex-col items-start justify-between space-y-2 px-4 py-2">
                  <div className="flex w-fit flex-col gap-2">{renderPages}</div>
                  <Separator />

                  <div className="flex w-full items-center justify-between">
                    <Link
                      className="inline-flex items-center gap-2 text-neutral-text hover:text-secondary-text"
                      target="_blank"
                      href={GITHUB_URL}
                    >
                      Github <LuExternalLink />
                    </Link>
                    <ThemeToggler />
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </ClickAwayListener>

          <SidebarTrigger
            className={cn(
              buttonStyles({
                variant: "text",
                color: "accent",
                size: "icon",
                className: "-me-2 md:hidden",
              }),
            )}
          >
            {isSidebarOpen ? <LuX /> : <LuMenu />}
          </SidebarTrigger>
        </div>
      </nav>

      <TopRightRadialGradient />
    </header>
  )
}

export default Navbar
