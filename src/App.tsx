import { useEffect, useState } from "react";
import Currency from "./components/currency";
import Navbar from "./components/navbar";
import { dolar } from "./services/dolar";
import Spinner from "./components/Spinner";

type dolarProps = {
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
};

export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      dolar().then((data) => {
        setIsLoading(false);
        setData(data);
      });
      return () => clearTimeout(timer);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center w-full justify-between h-screen">
      <Navbar />

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-4 p-4 items-stretch md:grid grid-cols-4">
          {data.length != 0 ? (
            data.map((item: dolarProps) => (
              <Currency currency={item} key={item.nombre} />
            ))
          ) : (
            <p>
              Lo sentimos en este momento no se encontro informacion del estado
              de la moneda norteamericana.😢
            </p>
          )}
        </div>
      )}
      <div className="border-2 p-2 w-full text-center">
        La informacion en pantalla corresponde a la cotizacion del momento.
        Consulte en fuentes oficiales del gobierno para tener mayor referencia.
      </div>
    </div>
  );
}
