import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { TiWeatherSunny } from "react-icons/ti";
import { Button } from "./ui/button";

export default function Navbar({
  currency,
  setCurrency,
}: {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [checked, setOnChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [checked]);

  return (
    <div className=" grid grid-cols-3 items-center w-full p-2">
      <p className="text-md md:text-2xl italic text-center col-end-3">
        Finanzas - Cambio
      </p>
      <div className="flex items-center justify-end gap-1">
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
        <p>
          <Button
            variant="outline"
            className="cursor-pointer p-2 y-2"
            onClick={() => setOnChecked(!checked)}
          >
            {checked ? <TiWeatherSunny /> : <MdDarkMode />}
          </Button>
        </p>
      </div>
    </div>
  );
}
