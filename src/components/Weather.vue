<template>
  <div class="weather">
    <RouterLink :to="{ name: 'weather-forecast' }"> lol </RouterLink>

    <RouterLink :to="{ name: 'bangkok' }">
      <div class="weather__background BK">
        <h1>Weather in BANGKOK</h1>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'oslo' }">
      <div class="weather__background">
        <h1>Weather in OSLO</h1>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'rome' }">
      <div class="weather__background">
        <h1>Weather in ROME</h1>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'seoul' }">
      <div class="weather__background">
        <h1>Weather in SEOUL</h1>
      </div>
    </RouterLink>
  </div>
</template>

<style>
.weather {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--size--big);
}

.weather__background {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  width: 35rem;
  height: 13rem;
  box-shadow: 0.1rem 0.1rem 0.5rem rgb(61, 60, 60);
}

.weather a {
  text-decoration: none;
  color: black;
  font-size: var(--font--caption);
}
</style>