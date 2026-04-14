async function fetchApiData(route: string) {
  const res = await fetch(`https://ctf-backend-worker.noahdiakowski.workers.dev/api/${route}`);

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const resJson = await res.json();
  return resJson.data;
}

export default fetchApiData;
