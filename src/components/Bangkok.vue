<template>
  <div class="bangkok">
    <div class="bangkok__background">
      <div class="bangkok__title">
        <h1>Weather in BANGKOK</h1>
        <h2>{{ currentDateTime() }}</h2>
      </div>
      <div class="bangkok__weather-forecast">
        <h2>temperature: {{ temperature }}</h2>
        <h2>wind: {{ wind }}</h2>
        <h2>description: {{ description }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temperature: "",
      wind: "",
      description: "",
    };
  },

  created() {
    this.fetchWeather();
  },

  methods: {
    async fetchWeather() {
      const url = "https://goweather.herokuapp.com/weather/bangkok";
      const response = await fetch(url);
      const output = await response.json();
      this.temperature = output.temperature;
      this.wind = output.wind;
      this.description = output.description;
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
.bangkok {
  display: flex;
  justify-content: center;
  background: pink;
  width: 100vw;
}

.bangkok__background {
  width: 40rem;
  background-image: url(/assets/images/forest.jpeg);
  border-radius: 3rem;
  box-shadow: 0.1rem 0.1rem 0.5rem rgb(61, 60, 60);
}

.bangkok__title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: var(--size--small);
}

.bangkok__weather-forecast {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: var(--font--caption);
  height: 25rem;
  padding: 2rem;
}

.bangkok__weather-forecast h2 {
  background: rgba(255, 255, 255, 0.671);
  padding-left: 1rem;
}
</style>