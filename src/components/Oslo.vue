<template>
  <div class="oslo">
    <div class="oslo__background">
      <div class="oslo__title">
        <h1>Weather in OSLO</h1>
        <h2>{{ currentDateTime() }}</h2>
      </div>
      <div class="oslo__weather-forecast">
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
      const url = "https://goweather.herokuapp.com/weather/oslo";
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
.oslo {
  display: flex;
  justify-content: center;
  background: palegoldenrod;
  width: 100vw;
}

.oslo__background {
  width: 40rem;
  background-image: url(/assets/images/forest.jpeg);
  border-radius: 3rem;
  box-shadow: 0.1rem 0.1rem 0.5rem rgb(61, 60, 60);
}

.oslo__title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: var(--size--small);
}

.oslo__weather-forecast {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: var(--font--caption);
  height: 25rem;
  padding: 2rem;
}

.oslo__weather-forecast h2 {
  background: rgba(255, 255, 255, 0.671);
  padding-left: 1rem;
}
</style>