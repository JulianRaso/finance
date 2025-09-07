export async function dolar() {
  const data = await fetch("https://dolarapi.com/v1/dolares")
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return data;
}

export async function euro() {
  const data = await fetch("https://dolarapi.com/v1/cotizaciones/eur")
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return data;
}

export async function chileno() {
  const data = await fetch("https://dolarapi.com/v1/cotizaciones/clp")
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return data;
}

export async function uruguayo() {
  const data = await fetch("https://dolarapi.com/v1/cotizaciones/uyu")
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return data;
}
