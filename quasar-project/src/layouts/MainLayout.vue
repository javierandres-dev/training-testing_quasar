<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>Testing Quasar v{{ $q.version }}</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <Navbar v-for="link in links" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import Navbar from "src/components/Navbar.vue";

const linksList = [
  {
    title: "Home",
    caption: "home",
    icon: "home",
    link: "",
  },
  {
    title: "Typography",
    caption: "typography",
    icon: "abc",
    link: "typography",
  },
  {
    title: "Settings",
    caption: "settings",
    icon: "settings",
    link: "settings",
  },
  {
    title: "Repository",
    caption: "repository",
    icon: "visibility",
    link: "https://github.com/javierandresgp/training-testing_quasar",
  },
];

export default defineComponent({
  name: "MainLayout",
  components: {
    Navbar,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      links: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
