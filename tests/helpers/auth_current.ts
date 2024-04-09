import axios from "axios";

export async function authCurrent() {
  const url = "https://memfis.fisgroup.ru/platform/rs/sec/login";

  const resp = await axios.get(url);

  console.log(resp.data);
  return resp.data;
}
