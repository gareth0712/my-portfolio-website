<template>
  <div id="logo">
    <img src="/logo.svg" />
  </div>
</template>

<style lang="scss" scoped>
#logo {
  margin: 0 auto;
  animation: 1s appear;

  img {
    width: 240px;
    height: 240px;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
