<template>
  <div class="forecast">
    <h1 class="forecast__title">Weather in</h1>
    <form class="forecast__search-location" v-on:submit.prevent="getWeather">
      <!--.prevent prevnts the site to refresh-->
      <input
        type="text"
        placeholder="What city?"
        v-model="citySearch"
        class="forecast__search-location-box"
      />
    </form>
    <section class="forecast__weather">
      <div>{{ weather.cityName }}</div>
      <div>{{ weather.date }}</div>
      <div>Temperature: {{ weather.temperature }}</div>
      <div>Wind: {{ weather.wind }}</div>
      <div>Description: {{ weather.description }}</div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      citySearch: "",

      weather: {
        cityName: "City name: ...",
        date: "Date: ...",
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
      const data = await response.json();
      console.log(data);
      this.weather.cityName = this.citySearch;
      this.weather.temperature = data.temperature;
      this.weather.wind = data.wind;
      this.weather.description = data.description;
      this.citySearch = "";
    },
  },
};
</script>

<style>
.forecast {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.forecast__search-location-box {
  font-size: var(--font--body);
  border: 2px solid black;
  padding: 1rem;
}

.forecast__weather {
  border: 2px solid black;
  width: 50rem;
  font-size: var(--font--body);
}
</style>