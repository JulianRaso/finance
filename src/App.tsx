import { useEffect, useState } from "react";
import { dolar } from "./services/dolar";
import Currency from "./components/currency";

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dolar().then((data) => {
      setIsLoading(false);
      setData(data);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4 items-center w-full justify-between h-screen">
      <div className="grid grid-cols-4 w-full pr-4">
        <h1 className="text-3xl font-bold col-start-1 col-end-3">
          Informacion Financiera
        </h1>
        <div className="flex gap-2 col-start-4">
          <div className="">Currency</div>
          <div>display</div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 items-stretch md:grid grid-cols-4">
        {data.length != 0 ? (
          data.map((item: dolarProps) => (
            <Currency currency={item} key={item.nombre} />
          ))
        ) : (
          <p>
            Lo sentimos en este momento no se encontro informacion del estado de
            la moneda norteamericana.😢
          </p>
        )}
      </div>
      <div className="border-2 p-2 w-full text-center">
        La informacion en pantalla corresponde a la cotizacion del momento.
        Consulte en fuentes oficiales del gobierno para tener mayor referencia.
      </div>
    </div>
  );
}
