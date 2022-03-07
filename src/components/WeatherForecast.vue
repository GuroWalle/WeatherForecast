<template>
  <div class="forecast">
    <form class="forecast__search-location" v-on:submit.prevent="getWeather">
      <!--.prevent prevnts the site to refresh-->
      <input
        type="text"
        placeholder="What city..?"
        v-model="citySearch"
        autocomplete="off"
        class="forecast__search-location-input"
      />
    </form>

    <p class="forecast__error" v-if="cityFound">No city found</p>

    <div class="forecast__city-date">
      <h1>{{ weather.cityName }}</h1>
      <h2>{{ currentDateTime() }}</h2>
    </div>

    <section class="forecast__weather" v-if="visible">
      <h3>Temperature: {{ weather.temperature }}</h3>
      <h3>Wind: {{ weather.wind }}</h3>
      <h3>Description: {{ weather.description }}</h3>

      <!-- All the different possible backgrounds based on the weather -->
      <img
        v-if="clear"
        class="weather__description-image"
        src="/assets/images/clear.svg"
        alt="Image of clear skies."
      />
      <img
        v-if="cloudy"
        class="weather__description-image"
        src="/assets/images/cloudy.svg"
        alt="Image of dark clouds."
      />
      <img
        v-if="partlyCloudy"
        class="weather__description-image"
        src="/assets/images/partlyCloudy.svg"
        alt="Image of party cloudy skies."
      />
      <img
        v-if="rain"
        class="weather__description-image"
        src="/assets/images/rain.svg"
        alt="Image of raindrops."
      />
      <img
        v-if="snow"
        class="weather__description-image"
        src="/assets/images/snow.svg"
        alt="Image of snowflakes."
      />
      <img
        v-if="sunny"
        class="weather__description-image"
        src="/assets/images/sunny.svg"
        alt="Image of a sun."
      />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      cityFound: false,

      clear: false,
      cloudy: false,
      partlyCloudy: false,
      rain: false,
      snow: false,
      sunny: false,

      citySearch: "",

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
      const url = `https://goweather.herokuapp.com/weather/${this.citySearch}`;
      const response = await fetch(url);

      try {
        const data = await response.json();
        console.log(data);

        // data to template
        this.weather.cityName = this.citySearch;
        this.weather.temperature = data.temperature;
        this.weather.wind = data.wind;
        this.weather.description = data.description;
        this.citySearch = "";

        // checks the backgrounds by using the description
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
        // makes the weather forecast visible after all the data has been checked
        this.visible = true;
        this.cityFound = false;
      } catch (error) {
        console.log(error);
        this.cityFound = true;
        this.visible = false;
      }
    },

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
  margin: var(--size--medium);
}

.forecast__search-location-input {
  width: 45rem;
  border: 2px solid black;
  border-radius: 2rem;
  padding: 0.8rem 3rem;
  font-size: var(--font--caption);
}

.forecast__error {
  margin: var(--size--small);
  font-size: var(--font--body);
  color: pink;
}

.forecast__city-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: var(--size--small) 0;
}

.forecast__city-date h1 {
  font-size: var(--font--heading);
}

.forecast__city-date h2 {
  font-size: var(--font--body);
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
  font-size: var(--font--body);
}

.forecast__weather h3 {
  background: rgba(255, 255, 255, 0.699);
  font-size: var(--font--body);
  padding-left: 1rem;
  z-index: 1;
  margin-left: 2rem;
  margin-right: 2rem;
}

.weather__description-image {
  position: absolute;
  width: 34.7rem;
}
</style>