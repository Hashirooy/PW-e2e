import axios from "axios";

export async function createTask() {
  const url = "https://prod.hw-backend.prosv.ru/api/v1/task/create";
  const body = {
    meta: {
      isReviewOpenAnswerModeSupported: true,
      path: {
        module: {
          id: 6783,
          lesson: {
            id: 33020,
            title: "§ 1. Политика и власть",
          },
          title: "Глава I. Политика",
        },
      },
      subject: {
        id: 5,
        title: "Обществознание",
      },
      publisher: "prosveshcheniye",
      showAnswerStatus: true,
      stepUuidsWithOpenAnswers: [],
      dueDate: "",
    },
    stepUuids: ["1818081a-a668-4b63-80df-4a06c0d7915d"],
    workbookId: 448,
  };

  const resp = await axios.post(url, body, {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTA1MjgzODIsImV4cCI6MTcxMzEyMDM4Miwicm9sZXMiOlsiUk9MRV9FRFVfU0tZU01BUlRfU1RVREVOVF9VU0FHRSJdLCJ1c2VySWQiOjQwNTY0NTM5LCJlbWFpbCI6InRhamF5ZWQzODVAZGFya3NlLmNvbSIsIm5hbWUiOiJ0ZXN0Iiwic3VybmFtZSI6InRlc3QiLCJpZGVudGl0eSI6InRpeGliaXZhcGEifQ.ViL3wQ31YrEwvB7h9fU581QzjfJ_gOJG-tdHrd-b1r4DSSpnfFklO9DI0G3NNazD3U1PCIBBfmlX9I3cEiYHaKxIdZz3kmjG9r8XhyH2WsX8D4_iOvUiy-8MrJ28RBoyweZAmkzB5lyhezA36436fbAxmtUFxHD77PCrODhRjFnbn2Qafp_CskOfjvkSBD8xNf4IOEyJpe-kaWAd8IzTE4QpjPiycM3-KruevRLAt8Gn9ECFiokpt0oIPaNzVXXPj_PAX0tKIkyJt5zwrzk6QwBFLTGewgPpwGt1yFKXyEmu-Fz5puKfQjpBKFvA185h5pyjFefCbZUteBP6-1cJkPwnP7tTL-Ou9BphpNqamyIY5aDDjjspEOD8oce6ceOYEC-Ff3IJ6OvXBGSn0NcSSvGDdhb6sznMLy8plp7cN2b5bIHpcXZScHfHTrJ7CGuQEgdVnbjqQXK9E1RB4rQb2j9S_lSBg9Hklw4K2NNXsLx4-86qDWDbCs7A1ouGip-9wrvv8OMeAjA0aEel4eqLMLVfwow14SUjuerOg-bCg1zNvVREqUpF0YqVlmVsy_9SB-9WXJ4rzabc08Bx6HCYRgIDEahnTWee_JFdIZgRFNSjnZdGpOx_LbNQ7ViO_UbsjvwUCMfLfAm4TKjfUCX-KZMUpDNVDuGAj8Kf4Co6mKY",
    },
  });

  console.log(resp.data);
  return resp.data;
}
