<template lang="html">
  <nuxt-link class="logo" to="/">
    <h1 class="logo__text">
      CreativeCareers
    </h1>
    <div class="logo__badge badge">
      <h2 class="badge__text">
        alpha
      </h2>
    </div>
  </nuxt-link>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.logo {
  height: 24px;
  display: flex;
}

.logo__text {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -.02em;
  color: #000;
  font-family: Geometric, sans-serif;
}

.logo__badge {
  margin-top: 4px;
  margin-left: 6px;
}

.badge {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: #365DE7;
  padding: 1px 3px;
}

.badge__text {
  font-family: OpenSans, sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 11px;
  letter-spacing: -.02em;
  color: #F5F6F7;
}

@include mobile {
  .logo {
    align-items: center;
  }

  .logo__text {
    font-size: 19.8px;
    line-height: 20px;
  }

  .logo__badge {
    margin-top: 0;
  }

  .badge {
    height: fit-content;
    padding: 3px 4px;
  }
}
</style>
