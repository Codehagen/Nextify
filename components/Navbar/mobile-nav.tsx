"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "../shadcn/button";
import { Icons } from "../Icons/icons";
import { Popover, PopoverContent, PopoverTrigger } from "../shadcn/popover";
import { ScrollArea } from "../shadcn/scroll-area";
import { siteConfig } from "@/components/Navbar/site";

export function MobileDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Icons.Logo className="mr-2 h-6 w-6" />
          <span className="text-lg font-bold tracking-tight">
            {siteConfig.name}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-40 mt-2 h-[calc(100vh-4rem)] w-screen animate-none rounded-none border-none transition-transform">
        <ScrollArea className="py-8">
          {siteConfig.mainNav.map(
            (item) =>
              item.href && (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex py-1 text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.title}
                </Link>
              )
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
