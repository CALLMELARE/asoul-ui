<template>
  <div class="about">
    <div class="about-content">
      <div class="about-content-title">ASoul UI</div>
      <div class="about-content-subtitle">
        <img
          alt="npm"
          src="https://img.shields.io/npm/v/asoul-ui?style=flat-square"
        />
        <img
          alt="npm"
          src="https://img.shields.io/npm/dm/asoul-ui?style=flat-square"
        />
        <img
          alt="GitHub last commit"
          src="https://img.shields.io/github/last-commit/CALLMELARE/asoul-ui?style=flat-square"
        />
      </div>
      <div class="about-subtitle">
        {{ $t("about.asoulmembers") }}
      </div>
      <div class="about-text">
        <ASButton
          type="text"
          @click="open('https://space.bilibili.com/672346917')"
        >
          @向晚Ava
        </ASButton>
        <ASButton
          type="text"
          @click="open('https://space.bilibili.com/672353429')"
        >
          @贝拉Bella
        </ASButton>
        <ASButton
          type="text"
          @click="open('https://space.bilibili.com/351609538')"
        >
          @珈乐Carol
        </ASButton>
        <ASButton
          type="text"
          @click="open('https://space.bilibili.com/672328094')"
        >
          @嘉然Diana
        </ASButton>
        <ASButton
          type="text"
          @click="open('https://space.bilibili.com/672342685')"
        >
          @乃琳Eileen
        </ASButton>
      </div>
      <div class="about-text">
        <ASButton
          type="text"
          @click="open('https://space.bilibili.com/703007996')"
        >
          @A-SOUL_Official
        </ASButton>
      </div>
      <div class="about-subtitle">
        {{ $t("about.contactMe") }}
      </div>
      <div class="about-text">
        <ASButton
          type="text"
          @click="open('https://space.bilibili.com/14556396')"
          >@CALLMELARE</ASButton
        >
      </div>
      <div class="about-subtitle">
        {{ $t("about.specialThanks") }}
      </div>
      <div class="about-text">
        <ASButton type="text" @click="open('https://github.com/fect-org/fect')"
          ><div id="fect"></div>
        </ASButton>
      </div>
      <!-- <div class="about-text">Made with &#x2764; by LARE</div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { ASButton } from "asoul-ui";
import { useRouter } from "vue-router";
export default {
  name: "About",
  components: { ASButton },
  setup() {
    const router = useRouter();
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }
    return { open, jump };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
.about-content {
  position: relative;
  height: calc(100vh - 3.75rem - 1px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  .about-content-title {
    @include font_color(theme_color);
    cursor: default;
    user-select: none;
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 2.75rem;
    letter-spacing: 0.3rem;
  }
  .about-content-subtitle {
    @include font_color(sub_color);
    cursor: default;
    user-select: none;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    font-size: 1.25rem;
    img {
      margin: 0 0.2rem;
    }
  }
  .about-subtitle {
    cursor: default;
    user-select: none;
    @include font_color(primary_color);
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    padding: 0.25rem 0;
  }
  .about-text {
    cursor: default;
    user-select: none;
    @include font_color(secondary_color);
    text-align: center;
    padding: 0.25rem 0;
    display: flex;
    justify-content: center;
  }
  #fect {
    width: 2rem;
    height: 2rem;
    background-size: cover;
    background-image: url("../assets/fect.png");
  }
}
</style>
