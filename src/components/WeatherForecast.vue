<!-- Gotten help from: https://www.youtube.com/watch?v=5Uxe_MNd6go&list=PLgiAmmJALlgzvpogJwhFytLmh6tI-TQSN&index=13&ab_channel=SomTeaCodes -->
<template>
  <div class="forecast">
    <div class="forecast__search">
      <!-- .prevent prevnts the site to refresh -->
      <form v-on:submit.prevent="getWeather">
        <input
          type="text"
          placeholder="What city..?"
          v-model="citySearch"
          autocomplete="off"
          class="forecast__input"
        />
      </form>
      <button class="forecast__search--button" @click="getWeather">Search</button>
    </div>

    <p class="forecast__app-info" v-if="onMainSite">
      Find the weather in any city in the world!
    </p>
    <p class="forecast__error" v-if="cityFound">No city found</p>

    <div class="forecast__city-and-date">
      <h1>{{ weather.cityName }}</h1>
      <h2 v-if="visible">{{ currentDateTime() }}</h2>
    </div>

    <section class="forecast__weather" v-if="visible">
      <h3>Temperature: {{ weather.temperature }}</h3>
      <h3>Wind: {{ weather.wind }}</h3>
      <h3>Description: {{ weather.description }}</h3>

      <!-- All the different possible backgrounds based on the weather -->
      <img
        v-if="clear"
        class="weather__description-image"
        src="/images/clear.svg"
        alt="Image of clear skies."
      />
      <img
        v-if="cloudy"
        class="weather__description-image"
        src="/images/cloudy.svg"
        alt="Image of dark clouds."
      />
      <img
        v-if="partlyCloudy"
        class="weather__description-image"
        src="/images/partlyCloudy.svg"
        alt="Image of party cloudy skies."
      />
      <img
        v-if="rain"
        class="weather__description-image"
        src="/images/rain.svg"
        alt="Image of raindrops."
      />
      <img
        v-if="snow"
        class="weather__description-image"
        src="/images/snow.svg"
        alt="Image of snowflakes."
      />
      <img
        v-if="sunny"
        class="weather__description-image"
        src="/images/sunny.svg"
        alt="Image of a sun."
      />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      citySearch: "",

      visible: false,
      cityFound: false,
      onMainSite: true,

      // Background images
      clear: false,
      cloudy: false,
      partlyCloudy: false,
      rain: false,
      snow: false,
      sunny: false,

      weather: {
        cityName: "",
        date: "",
        temperature: "",
        wind: "",
        description: "",
      },
    };
  },
  methods: {
    async getWeather() {
      console.log(this.citySearch);
      // Fetches data from the api with the same name as searched
      const url = `https://goweather.herokuapp.com/weather/${this.citySearch}`;
      const response = await fetch(url);

      try {
        const data = await response.json();
        console.log(data);

        this.weather.cityName = this.citySearch;
        this.weather.temperature = data.temperature;
        this.weather.wind = data.wind;
        this.weather.description = data.description;

        // Clears the input after pressing enter / submitting
        this.citySearch = "";

        // Checks the backgrounds by using the description (from api)
        const weatherDescription = data.description;
        if (weatherDescription.includes("Clear")) {
          this.clear = true;
          this.cloudy = false;
          this.partlyClear = false;
          this.rain = false;
          this.snow = false;
          this.sunny = false;
        }
        if (weatherDescription.includes("Cloudy")) {
          this.clear = false;
          this.cloudy = true;
          this.partlyClear = false;
          this.rain = false;
          this.snow = false;
          this.sunny = false;
        }
        if (weatherDescription.includes("Light snow")) {
          this.clear = false;
          this.cloudy = false;
          this.partlyClear = false;
          this.rain = false;
          this.snow = true;
          this.sunny = false;
        }
        if (weatherDescription.includes("Partly cloudy")) {
          this.clear = false;
          this.cloudy = false;
          this.partlyCloudy = true;
          this.rain = false;
          this.snow = false;
          this.sunny = false;
        }
        if (weatherDescription.includes("Rain")) {
          this.clear = false;
          this.cloudy = false;
          this.partlyClear = false;
          this.rain = true;
          this.snow = false;
          this.sunny = false;
        }
        if (weatherDescription.includes("Snow")) {
          this.clear = false;
          this.cloudy = false;
          this.partlyClear = false;
          this.rain = false;
          this.snow = true;
          this.sunny = false;
        }
        if (weatherDescription.includes("Sunny")) {
          this.clear = false;
          this.cloudy = false;
          this.partlyClear = false;
          this.rain = false;
          this.snow = false;
          this.sunny = true;
        }
        if (weatherDescription.includes("Light rain")) {
          this.clear = false;
          this.cloudy = false;
          this.partlyClear = false;
          this.rain = true;
          this.snow = false;
          this.sunny = false;
        }

        // Makes the weather forecast visible after all the data has been checked
        this.visible = true;
        this.cityFound = false;
        this.onMainSite = false;

        // If something does not match, show error
      } catch (error) {
        console.log(error);
        this.visible = false;
        this.cityFound = true;
        this.onMainSite = false;
      }
    },

    // Shows year, month and date
    currentDateTime() {
      const current = new Date();
      const date =
        current.getFullYear() +
        " " +
        (current.getMonth() + 1) +
        "." +
        current.getDate();

      const dateTime = date;

      return dateTime;
    },
  },
};
</script>

<style>
.forecast {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 110vh;
  background: white;
}

.forecast__search {
  display: flex;
  flex-direction: row;
  margin: var(--size-big) 0 0 0;
  gap: 2rem;
}

.forecast__input {
  padding: 0.7rem 8rem;
  border: 0.3rem solid black;
  border-radius: 2rem;
  background: white;
  font-size: var(--font-body);
}

.forecast__search--button {
  padding: 0 5rem;
  border-radius: 2rem;
  border: 0.2rem solid black;
  font-size: var(--font-caption);
  color: black;
  background: lightgrey;
}

/* show if onMainSite = true */
.forecast__app-info {
  margin: var(--size-big) 0;
  text-align: center;
  font-size: var(--font-body);
}

/* shows if cityFound = true */
.forecast__error {
  margin: var(--size-big) 0;
  text-align: center;
  font-size: var(--font-body);
  color: red;
}

  .forecast__city-and-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.forecast__city-and-date h1 {
  font-size: var(--font-heading);
  margin: var(--size-small) 0;
}

/* shows if visible = true  */
.forecast__city-and-date h2 {
  font-size: var(--font-body);
}

.forecast__weather {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 35rem;
  height: 26.5rem;
  border: 2px solid black;
  border-radius: 2rem;
  background: rgba(155, 150, 150, 0.473);
  font-size: var(--font-body);
}

/* shows if cityFound = true */
.forecast__weather h3 {
  background: rgba(255, 255, 255, 0.699);
  font-size: var(--font-body);
  padding-left: 1rem;
  z-index: 1;
  margin-left: 2rem;
  margin-right: 2rem;
}

.weather__description-image {
  position: absolute;
  width: 34.7rem;
}

/* media screen does not work an I don't know why */
@media screen and (max-width: 500px){
  .forecast {
    background: blue;
}
}
</style>