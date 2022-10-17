let weather = {
  apiKey: "20957daa73739ee04a5f325baf22699d",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Mysore");

// let news = {
//   fetchNews: function (city) {
//     fetch(
//       "https://newsapi.org/v2/top-headlines?country=" +
//         city +
//         "&apiKey=54e6adeffe214d468d4772603a7eea6a" +
//         this.newsapiKey
//     ).then((response) => {
//       console.log(response);
//       if (!response.ok) {
//         alert("check for the spelling.");
//         throw new Error("No information found.");
//       }
//       return response.json();
//     });
//     .then((data) => this.fetchNews(data))
//   },
//   displayNews : function (data) {
//     const { loacation } = data;
//     const { title, description, url } = data.articles[0];

//     document.querySelector(".topic1").innerText = articles[0].title;
//     document.querySelector(".information1").innerText = articles[0].description;
//     document.querySelector(".url1").innerText = articles[0].url;
//   },
// };
// fetchNews();
