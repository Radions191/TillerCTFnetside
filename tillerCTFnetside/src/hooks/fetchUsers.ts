async function fetchApiData(route: string) {
  const res = await fetch(`http://localhost:3001/${route}`);

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const resJson = await res.json();
  return resJson.data;
}

export default fetchApiData;
