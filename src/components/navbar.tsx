import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useState } from "react";

export default function Navbar() {
  const [currency, setCurrency] = useState("Dolar");
  return (
    <div className="grid grid-cols-3 items-center w-full p-4">
      <p className="text-2xl italic text-center col-end-3">
        Finance - currency
      </p>
      <div className="flex items-center justify-end gap-2">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>{currency}</MenubarTrigger>
            <MenubarContent>
              <MenubarItem
                className="hover:bg-gray-400"
                onClick={() => setCurrency("Dolar")}
              >
                Dolar
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem
                className="hover:bg-gray-400"
                onClick={() => setCurrency("Euro")}
              >
                Euro
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem
                className="hover:bg-gray-400"
                onClick={() => setCurrency("Peso Chileno")}
              >
                Peso Chileno
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem
                className="hover:bg-gray-400"
                onClick={() => setCurrency("Peso Uruguayo")}
              >
                Peso Uruguayo
              </MenubarItem>
              <MenubarSeparator />
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <p>Currency</p>
      </div>
    </div>
  );
}
