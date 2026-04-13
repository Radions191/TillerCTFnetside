async function fetchUsers() {
  const res = await fetch("http://localhost:3001/users");

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const resJson = await res.json();
  return resJson.data;
}

export default fetchUsers;
