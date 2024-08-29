<template>
  <div>
    <div class="header">
      <ul class="menu-list">
        <li v-for="item in menus" :key="item.key">
          <a
            class="link"
            :class="{'active': isSelectedComponent(item.key)}"
            @click="handleChangeMenu(item)"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
    <div class="body">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import Home from './components/Home'
import DrawCurve from './components/DrawCurve'
import Geometry from './example/Geometry'

export default {
  name: 'App',
  components: {
    Home,
    DrawCurve,
    Geometry,
  },
  data() {
    return {
      currentMenuKey: 'home',
      currentComponent: 'Home',
      menus: [
        { key: 'home', title: 'Home', component: Home },
        { key: 'draw-curve', title: 'DrawCurve', component: DrawCurve },
        { key: 'geometry', title: 'Geometry', component: Geometry },
      ],
    }
  },
  methods: {
    handleChangeMenu(menu) {
      this.currentComponent = menu.component
      this.currentMenuKey = menu.key
    },
    isSelectedComponent(menuKey) {
      return this.currentMenuKey === menuKey
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/global.scss';

.header, .body {
  padding: 10px;
}

.menu-list {
  --transition-duration: 0.3s;
  --transition-timing: ease;

  display: flex;
  gap: 1rem;
  list-style-type: none;
  font-size: 1.25rem;
  .link {
    text-decoration: none;
    position: relative;
    transition: color var(--transition-duration) var(--transition-timing);
    cursor: pointer;
    &.active {
      color: $dracula-green;
    }
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $dracula-pink;
      transform: scaleX(0);
      transition: transform var(--transition-duration) var(--transition-timing);
    }
    &.active::after {
      transform: scaleX(1);
    }
  }
}
</style>
