<template>
  <footer>
    <img src="/assets/images/footer-logo.svg" alt="" />
    <ul class="footer__list">
      <li class="list__element">Oslo, Norway</li>
      <li class="list__element">Random@generator.com</li>
    </ul>
    <ul>
      <li>About us</li>
      <li>Instagram</li>
      <li>Twitter</li>
    </ul>
  </footer>
</template>

<style>
footer {
  display: flex;
  justify-content: space-between;
  margin-top: 30rem;
  height: 12rem;
  width: 100vw;
  background: rgb(143, 143, 143);
  padding: 2rem 5rem;
}

footer ul {
  list-style: none;
  font-size: var(--font--caption);
}
</style>