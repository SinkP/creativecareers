<template lang="html">
  <div class="menu">
    <a href="#" class="link_menu">
      <div class="wrapper_menu wrapper_menu-active">
        <h4 class="title_menu title_menu-active">Описание</h4>
      </div>
    </a>
    <a href="#" class="link_menu">
      <div class="wrapper_menu">
        <h4 class="title_menu">Знания и умения</h4>
      </div>
    </a>
    <a href="#" class="link_menu">
      <div class="wrapper_menu">
        <h4 class="title_menu">Инструменты</h4>
      </div>
    </a>
    <a href="#" class="link_menu">
      <div class="wrapper_menu">
        <h4 class="title_menu">С кем работает</h4>
      </div>
    </a>
    <a href="#" class="link_menu">
      <div class="wrapper_menu">
        <h4 class="title_menu">Как стать</h4>
      </div>
    </a>
    <a href="#" class="link_menu">
      <div class="wrapper_menu">
        <h4 class="title_menu">Советы</h4>
      </div>
    </a>
    <a href="#" class="link_menu">
      <div class="wrapper_menu">
        <h4 class="title_menu">Известные представители</h4>
      </div>
    </a>
    <a href="#" class="link_menu">
      <div class="wrapper_menu">
        <h4 class="title_menu">Может быть интересно</h4>
      </div>
    </a>
    <a href="#" class="link_menu">
      <div class="wrapper_menu">
        <h4 class="title_menu">Смотреть и читать</h4>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang="scss">
.menu {  
  height: 406px;
  width: 284px;
  padding: 14px;
  border-radius: 12px;
  background: #FFF;
}
.wrapper_menu {
  width: 256px;
  height: 42px;
  padding-left: 12px;
  display: flex;
  align-items: center;
  border-radius: 8px;
}
.title_menu {
  font-family: Jost, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #79829A;
}
.wrapper_menu-active {
  background: #F5F6F7;
}
.title_menu-active {
  font-weight: 600;
  color: #000;
}
</style>