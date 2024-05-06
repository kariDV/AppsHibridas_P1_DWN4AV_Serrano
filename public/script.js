//Url del servidor

const currentUrl = window.location.href;

const inputEndpointApi = document.querySelector("#input-endpoint-api");
const btnEndpointApi = document.querySelector("#btn-endpoint-api");
const textEndpointApi = document.querySelector("#text-endpoint-api");

btnEndpointApi.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`${currentUrl}${inputEndpointApi.value}`)
    .then((res) => res.json())
    .then((data) => (textEndpointApi.value = JSON.stringify(data, null, 2)));
});

// fetch(`${currentUrl}${inputEndpointApi.value}`)
//     .then((res) => res.json())
//     .then((data) => (textEndpointApi.value = data));
