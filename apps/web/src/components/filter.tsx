"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Checkbox,
  Label,
  Switch,
} from "@waredrop/ui";

const filters = {
  colors: [
    { id: "black", name: "Black" },
    { id: "orange", name: "Orange" },
    { id: "blue", name: "Blue" },
    { id: "yellow", name: "Yellow" },
    { id: "green", name: "Green" },
  ],
};

type FilterKeys = keyof typeof filters;

export default function Filter() {
  return (
    <form>
      <div className="flex items-center py-4 border-b">
        <Label htmlFor="instock" className="flex-1 uppercase">
          In stock only
        </Label>
        <Switch id="instock" name="in_stock" />
      </div>
      <Accordion type="single" collapsible>
        {Object.keys(filters).map((filter) => (
          <AccordionItem key={filter} value={filter}>
            <AccordionTrigger>{filter.toUpperCase()}</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {filters[filter as FilterKeys].map((color) => (
                  <li key={color.id} className="flex items-center gap-2">
                    <Checkbox id={color.id} />
                    <Label htmlFor={color.id}>{color.name}</Label>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </form>
  );
}
