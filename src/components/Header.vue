<template>
  <header>
    <RouterLink :to="{ name: 'home' }">
      <img class="header__logo" src="/assets/images/logo.svg" alt="" />
    </RouterLink>
  </header>
</template>

<style>
header {
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  margin: var(--size--small);
}
</style>