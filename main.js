const residentButton = document.querySelector("#residentButton");

function handleClick() {
  axios
    .get("https://swapi.dev/api/planets/?search=Alderaan")
    .then((response) => {
      const residents = response.data.results[0].residents;
      residents.forEach((resident) => {
        axios.get(resident).then((response) => {
          const residentName = response.data.name;
          const residentHeading = document.createElement("h2");
          residentHeading.textContent = residentName;
          document.body.appendChild(residentHeading);
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

residentButton.addEventListener("click", handleClick);
