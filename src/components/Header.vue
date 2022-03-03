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
  padding: var(--size--small);
  top: 0;
  left: 0;
  width: 100%;
}
</style>