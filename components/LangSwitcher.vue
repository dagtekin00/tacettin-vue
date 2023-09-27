<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div class="language-switcher">
    <div class="language-icon" @mouseover="showLanguages = true">
      <i class="fa fa-globe" id="iconLanguage"></i>
    </div>
    <div
      class="languages"
      v-if="showLanguages"
      @mouseover="showLanguages = true"
      @mouseleave="showLanguages = false"
    >
      <div
        v-for="item in locales"
        :key="item.code"
        @click="changeLanguage(item.code)"
        class="language-option"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locales, locale, setLocale } = useI18n();
const showLanguages = ref(false);

function changeLanguage(newLang) {
  setLocale(newLang);
  showLanguages.value = false;
}
</script>

<style>
#iconLanguage {
  color: rgba(255, 255, 255, 0.73);
  font-size: 45px;
}
.light-mode #iconLanguage {
  color: black;
}
.language-switcher {
  position: relative;
}

.languages {
  display: flex;
  flex-direction: column;
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  background-color: rgb(192, 192, 192);
  border: 1px solid #000000;
  padding: 4px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.language-option {
  cursor: pointer;
  padding: 8px;
}
</style>
