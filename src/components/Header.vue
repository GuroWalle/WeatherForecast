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
  margin: var(--size--small) 0;
  top: 0;
  left: 0;
  width: 100%;
}
</style>