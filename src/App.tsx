import { useEffect, useState } from "react";
import CurrencyCard from "./components/currencyCard";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Spinner from "./components/spinner";
import { chileno, dolar, euro, uruguayo } from "./services/exchange";

type currencyProps = {
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
};

export default function App() {
  const [currency, setCurrency] = useState("Dolar");
  const [data, setData] = useState<currencyProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      switch (currency) {
        case "Dolar":
          return dolar().then((data) => {
            setIsLoading(false);
            setData(data);
          });
        case "Euro":
          return euro().then((data) => {
            setIsLoading(false);
            setData([data]);
          });
        case "Peso Chileno":
          return chileno().then((data) => {
            setIsLoading(false);
            setData([data]);
          });
        case "Peso Uruguayo":
          return uruguayo().then((data) => {
            setIsLoading(false);
            setData([data]);
          });
      }
      return () => clearTimeout(timer);
    }, 1000);
  }, [currency]);

  return (
    <div className="flex flex-col gap-4 items-center w-full justify-between h-dvh">
      <Navbar currency={currency} setCurrency={setCurrency} />

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-4 p-4 items-stretch md:grid grid-cols-4">
          {data.length != 0 ? (
            data.map((item: currencyProps) => (
              <CurrencyCard currency={item} key={item.nombre} />
            ))
          ) : (
            <p>
              Lo sentimos en este momento no se encontro informacion del estado
              de la moneda solicitada.😢
            </p>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}
