"use client"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { RiArrowDropDownLine } from "react-icons/ri"

const components: { title: string; href: string; description: string }[] = [
 
  {
    title: "Men's clothes",
    href: "/casual",
    description:
      "In attractive and spectacular colors and designs.",
  },
  {
    title: "Women's clothes",
    href: "/casual",
    description: "Ladies, your style and tastes are important to us",
  },
  {
    title: "Kids clothes",
    href: "/casual",
    description:
      "For all ages, with happy and beautiful colors",
  },
  {
    title: "Bags and Shoes",
    href: "/casual",
    description:"Suitable for men, women and all tastes and styles",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>         
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md ">
             
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid  sm:w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component,index) => (
              <Link href={component.href} key={index}>
                   <ListItem
                  key={component.title}
                  title={component.title}
                >
                  {component.description}
                </ListItem>
              </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
