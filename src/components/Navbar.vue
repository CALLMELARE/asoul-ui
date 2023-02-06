<template>
  <div class="nav-bar">
    <div class="nav-bar-brand" @click="jump('/')">ASoul UI</div>
    <span class="nav-bar-theme">
      <nav class="nav-bar-box">
        <nav class="nav-bar-item">
          <ASButton type="text" @click="jump('/')">
            {{ $t("nav.Home") }}
          </ASButton>
        </nav>
        <nav class="nav-bar-item">
          <ASButton type="text" @click="jump('/docs')">
            {{ $t("nav.Docs") }}
          </ASButton>
        </nav>
        <nav class="nav-bar-item">
          <ASButton type="text" @click="jump('/components')">
            {{ $t("nav.Components") }}
          </ASButton>
        </nav>
      </nav>
      <nav class="nav-bar-box">
        <nav class="nav-bar-item">
          <ASButton type="text" @click="updateTheme(theme.darkmode)">
            <ASIcon v-if="theme.darkmode">
              <WeatherSunny16Regular />
            </ASIcon>
            <ASIcon v-else>
              <WeatherMoon16Regular />
            </ASIcon>
          </ASButton>
        </nav>
        <nav class="nav-bar-item">
          <ASButton
            v-if="$i18n.locale == 'ch'"
            type="text"
            @click="$i18n.locale = 'en'"
          >
            English
          </ASButton>
          <ASButton v-else type="text" @click="$i18n.locale = 'ch'">
            中文
          </ASButton>
        </nav>
        <nav class="nav-bar-item">
          <ASButton type="text" @click="jump('/about')">
            {{ $t("nav.About") }}
          </ASButton>
        </nav>
        <nav class="nav-bar-item">
          <ASButton
            type="text"
            @click="open('https://github.com/CALLMELARE/asoul-ui')"
          >
            Github</ASButton
          >
        </nav>
        <nav class="nav-bar-item">
          <ASButton type="text" class="">
            {{ version }}
          </ASButton>
        </nav>
      </nav>
    </span>
  </div>
</template>

<script lang="ts">
import { ASButton, ASIcon } from "asoul-ui";
import useTheme from "asoul-ui/utils/theme/useTheme";
import { WeatherMoon16Regular, WeatherSunny16Regular } from "@vicons/fluent";
import { useRouter } from "vue-router";
import { reactive } from "vue";
import pkg from "asoul-ui/package.json";
export default {
  name: "Navbar",
  components: { ASButton, ASIcon, WeatherMoon16Regular, WeatherSunny16Regular },
  props: { active: String },
  setup() {
    const router = useRouter();
    const theme = reactive({
      darkmode: false,
      lang: "ch",
    });
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }
    const version = pkg["version"]?.replace("^", "");
    function updateTheme(mode: Boolean) {
      useTheme("theme-dark");
    }

    return { open, jump, theme, updateTheme, version };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
.nav-bar {
  height: 3.75rem;
  display: flex;
  position: sticky;
  background-color: var(--asoul-invert-color);
  box-shadow: 0 5px 10px var(--asoul-primary-color-12);

  .nav-bar-brand {
    width: 15%;
    position: relative;
    text-align: center;
    font-size: 1.25rem;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    padding: 1.25rem 0;
    line-height: 1;
    color: var(--asoul-theme-color);
  }
  .nav-bar-theme {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-right: 1.25rem;
    .nav-bar-box {
      display: flex;
      padding: 0.75rem 0;
      .nav-bar-item {
        padding: 0 0.25rem;
      }
    }
  }
}
</style>
