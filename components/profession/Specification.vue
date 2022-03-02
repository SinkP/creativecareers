<template>
  <div class="specification" :class="reverse ? '_reverse' : ''">
    <div
      v-for="col of cols"
      :key="col.title"
      class="cell"
    >
      <h4 class="d-title">
        {{ col.title }}
      </h4>
      <h5 class="description">
        {{ col.description }}
        <img
          v-if="col.marked"
          class="marked"
          src="~/assets/img/profession/lightning.svg"
          alt="Молния"
        >
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cols: {
      type: Array,
      default: () => [],
    },
    reverse: {
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style lang="scss" scoped>
.specification {
  max-width: 892px;
  width: 100%;
  height: 76px;
  padding: 18px 32px;
  position: relative;
  display: flex;
  background: #FFF;
  border-radius: 12px;
  border-top-left-radius: 0;

  .description {
    display: flex;
    align-items: center;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 17px;
    font-weight: normal;

    .marked {
      margin-left: 4px;
    }
  }

  .d-title {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: .04em;
    text-transform: uppercase;
  }

  &._reverse {
    .d-title {
      font-family: Jost, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      line-height: 16px;
      letter-spacing: .04em;
      text-transform: uppercase;
      color: #79829A;
    }
    .description {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #1E2228;
    }
  }

  .cell {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 32px;
    margin-right: 32px;
    position: relative;

    &::after {
      position: absolute;
      right: 0;
      content: "";
      width: 1px;
      height: 32px;
      background: #E3E5EA;
      border-radius: 32px;
    }
  }

  .cell:last-child {
    &::after {
      display: none;
    }
  }
}

@include mobile {
  .specification {
    height: auto;
    flex-direction: column;
    gap: 16px;
    border-top-left-radius: 12px;
  }

  .cell {
    &::after {
      display: none;
    }
  }
}
</style>
