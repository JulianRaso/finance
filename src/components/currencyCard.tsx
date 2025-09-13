function formatedDate(updateDate: string) {
  const date = new Date(updateDate);

  const time = date.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const formatDate = date.toLocaleDateString("es-ES");

  return `${formatDate} - ${time}`;
}

const formatCurrency = (value: number) => {
  return value.toFixed(2);
};

type dolarProps = {
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
};

export default function CurrencyCard({ currency }: { currency: dolarProps }) {
  const { nombre, compra, venta, fechaActualizacion } = currency;

  return (
    <div className="flex flex-col p-4 border rounded shadow gap-3 text-sm md:text-lg">
      <h2 className="text-xl font-semibold border-b-2 text-center">{nombre}</h2>
      <div className="flex gap-2 items-center justify-between">
        <p className="md:text-lg p-2">Compra: ${formatCurrency(compra)}</p>
        <div className="h-full md:border-1" />
        <p className="md:text-lg p-2">Venta: ${formatCurrency(venta)}</p>
      </div>
      <p className="flex s-center justify-center border-t-2 mt-2">
        {formatedDate(fechaActualizacion)}
      </p>
    </div>
  );
}
