import axios from "axios";

export async function auth() {
  const url = "https://memfis.fisgroup.ru/platform/rs/sec/login";
  const body = {
    login: "opleukhin_gs",
    password: "QhEnc1VWWVg=",
  };

  const resp = await axios.post(url, body, {
    headers: {
      // Cookie:
      //   'platform-session-id=""; platform-user-name=""; webRoot=/; platform-preauthorized-id=1712678267161',
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  });

  console.log(resp.data);
  return resp.data;
}
