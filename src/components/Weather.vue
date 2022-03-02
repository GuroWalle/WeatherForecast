<template>
  <div class="weather">
    <div class="weather__background-BK">
      <div class="weather__title">
        <h1>Weather in Bangkok</h1>
        <h2>{{ currentDateTime() }}</h2>
      </div>
      <div class="weather__forecast">
        <h2>temperature:{{ BKtemperature }}</h2>
        <h2>wind: {{ BKwind }}</h2>
        <h2>description: {{ BKdescription }}</h2>
      </div>
    </div>
    <div class="weather__background-LYB">
      <div class="weather__title">
        <h1>Weather in longyearbyen</h1>
        <h2>{{ currentDateTime() }}</h2>
      </div>
      <div class="weather__forecast">
        <h2>temperature:{{ LYBtemperature }}</h2>
        <h2>wind: {{ LYBwind }}</h2>
        <h2>description: {{ LYBdescription }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BKtemperature: "",
      BKwind: "",
      BKdescription: "",
      LYBtemperature: "",
      LYBwind: "",
      LYBdescription: "",
    };
  },

  created() {
    this.fetchBKWeather();
    this.fetchLYBWeather();
  },

  methods: {
    async fetchBKWeather() {
      const url = "https://goweather.herokuapp.com/weather/bangkok";
      const response = await fetch(url);
      const output = await response.json();
      this.BKtemperature = output.temperature;
      this.BKwind = output.wind;
      this.BKdescription = output.description;
    },

    async fetchLYBWeather() {
      const url = "https://goweather.herokuapp.com/weather/longyearbyen";
      const response = await fetch(url);
      const output = await response.json();
      this.LYBtemperature = output.temperature;
      this.LYBwind = output.wind;
      this.LYBdescription = output.description;
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
.weather {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--size--big);
  margin: var(--size--big) 0 auto 0;
}

.weather__background-BK {
  background-image: url(/assets/images/forest.jpeg);
  border-radius: 3rem;
  box-shadow: 0.1rem 0.1rem 0.5rem rgb(61, 60, 60);
}

.weather__title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35rem;
  margin: var(--size--small) 0 0 0;
}

.weather__forecast {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: var(--font--caption);
  height: 25rem;
  padding: 2rem;
}

.weather__forecast h2 {
  background: rgba(255, 255, 255, 0.671);
}

.weather__background-LYB {
  background-image: url(/assets/images/snow.jpeg);
  border-radius: 3rem;
  box-shadow: 0.1rem 0.1rem 0.5rem rgb(61, 60, 60);
}
</style>