import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Filter } from "lucide-react"
import { MdArrowDropDown, MdArrowDropDownCircle } from "react-icons/md"
import { RiArrowDropDownLine } from "react-icons/ri"
import { Button } from "./ui/button"
  
  export function Dressstyle() {
    return (
      <Accordion type="single" collapsible className="w-full px-5 py-5">
        <AccordionItem value="item-1">
            <h1 className="flex justify-between text-lg font-bold border-b pb-2 items-center">Dress Style  <RiArrowDropDownLine className="text-xl"/></h1>
          <AccordionTrigger>Casual</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Formal</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Gym</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Party</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
          <Button className="w-full rounded-[20px]">Apply Filter</Button>
        </AccordionItem>
      </Accordion>
    )
  }
  