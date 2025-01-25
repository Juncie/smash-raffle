export const sendToZapier = async (data) => {
  const raw = JSON.stringify(data);

  const requestOptions = {
    method: "POST",
    body: raw,
    redirect: "follow",
  };

  fetch("https://hooks.zapier.com/hooks/catch/19866727/2kzmod8/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};
