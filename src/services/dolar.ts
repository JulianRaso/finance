export async function dolar() {
  const data = await fetch("https://dolarapi.com/v1/dolares")
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return data;
}
