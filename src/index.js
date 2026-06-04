window.onload = () => {
  document.getElementById("suggest").onclick = () => {
    YaAuthSuggest.init(
      {
        client_id: "4c...3a",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-chi-seven.vercel.app/token.html",
      },
      "https://oauth-master-class-chi-seven.vercel.app"
    )
    .then(({ handler }) => handler())
    .then(async (data) => {
      const result = await fetchYandexData(data.access_token);
      authorize(result);
      console.log(result, data);
    })
    .catch((error) => console.log("Что-то пошло не так: ", error));
  };
};
