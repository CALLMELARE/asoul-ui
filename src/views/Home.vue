<template>
  <div class="home">
    <div class="home-banner">
      <div class="home-banner-start">
        <div class="home-banner-title">ASoul UI</div>
        <div class="home-banner-subtitle">
          {{ $t("home.Slogan") }}
        </div>
        <div class="home-banner-func">
          <ASButton class="home-banner-btn" @click="jump('/docs')">
            {{ $t("home.GetStarted") }}
          </ASButton>
          <ASButton
            class="home-banner-btn"
            type="outlined"
            @click="open('https://github.com/CALLMELARE/asoul-ui')"
            >Github</ASButton
          >
        </div>
        <div class="home-banner-icons">
          <span class="home-banner-icon" id="icon-1"></span>
          <span class="home-banner-icon" id="icon-2"></span>
          <span class="home-banner-icon" id="icon-3"></span>
        </div>
      </div>
      <div class="home-banner-box">
        <span
          class="home-banner-item"
          id="item-1"
          @click="open('https://space.bilibili.com/672346917')"
        >
          <span class="home-banner-text"> Ava </span>
          <span class="home-banner-content">
            <div class="home-banner-avatar"></div>
            <div class="home-banner-title">
              {{ $t("home.Ava.Name") }}
            </div>
            <div class="home-banner-desc">
              {{ $t("home.Ava.Desc") }}
            </div>
          </span>
        </span>
        <span
          class="home-banner-item"
          id="item-2"
          @click="open('https://space.bilibili.com/672353429')"
        >
          <span class="home-banner-text"> Bella </span>
          <span class="home-banner-content">
            <div class="home-banner-avatar"></div>
            <div class="home-banner-title">
              {{ $t("home.Bella.Name") }}
            </div>
            <div class="home-banner-desc">
              {{ $t("home.Bella.Desc") }}
            </div>
          </span>
        </span>
        <span
          class="home-banner-item"
          id="item-3"
          @click="open('https://space.bilibili.com/351609538')"
        >
          <span class="home-banner-text"> Carol </span>
          <span class="home-banner-content">
            <div class="home-banner-avatar"></div>
            <div class="home-banner-title">
              {{ $t("home.Carol.Name") }}
            </div>
            <div class="home-banner-desc">
              {{ $t("home.Carol.Desc") }}
            </div>
          </span>
        </span>
        <span
          class="home-banner-item"
          id="item-4"
          @click="open('https://space.bilibili.com/672328094')"
        >
          <span class="home-banner-text"> Diana </span>
          <span class="home-banner-content">
            <div class="home-banner-avatar"></div>
            <div class="home-banner-title">
              {{ $t("home.Diana.Name") }}
            </div>
            <div class="home-banner-desc">
              {{ $t("home.Diana.Desc") }}
            </div>
          </span>
        </span>
        <span
          class="home-banner-item"
          id="item-5"
          @click="open('https://space.bilibili.com/672342685')"
        >
          <span class="home-banner-text"> Eileen </span>
          <span class="home-banner-content">
            <div class="home-banner-avatar"></div>
            <div class="home-banner-title">
              {{ $t("home.Eileen.Name") }}
            </div>
            <div class="home-banner-desc">
              {{ $t("home.Eileen.Desc") }}
            </div>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ASButton } from "asoul-ui";
import { useRouter } from "vue-router";

export default {
  name: "Home",
  components: {
    ASButton,
  },
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
.home-banner {
  position: relative;
  height: calc(100vh - 3.75rem - 1px);
  .home-banner-start {
    display: flex;
    flex-direction: column;
    .home-banner-title {
      color: var(--asoul-primary-color);
      cursor: default;
      user-select: none;
      margin-top: 20vh;
      display: flex;
      justify-content: center;
      font-weight: bold;
      font-size: 4rem;
      letter-spacing: 0.3rem;
    }
    .home-banner-subtitle {
      color: var(--asoul-primary-color);
      cursor: default;
      user-select: none;
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      font-size: 1.25rem;
    }
    .home-banner-func {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      .home-banner-btn {
        margin: 0 0.25rem;
      }
    }
    .home-banner-icons {
      display: flex;
      justify-content: center;
      .home-banner-icon {
        width: 2rem;
        height: 2rem;
        margin: 1.5rem 0.75rem;
        background-size: contain;
      }
      #icon-1 {
        background-image: url("assets/vue.png");
      }
      #icon-2 {
        background-image: url("assets/typescript.png");
      }
      #icon-3 {
        background-image: url("assets/asoul.png");
      }
    }
  }
  .home-banner-box {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    .home-banner-item {
      cursor: pointer;
      position: relative;
      width: 20%;
      height: 3rem;
      overflow: hidden;
      text-align: center;
      /* border-radius: 10vw 10vw 0 0; */
      margin-top: 9rem;
      &:hover {
        animation: slide-top 0.5s both;
      }
      .home-banner-text {
        position: relative;
        color: inherit;
        width: 100%;
        font-size: 1.2rem;
        line-height: 3rem;
        letter-spacing: 0.4rem;
      }
      .home-banner-content {
        display: flex;
        flex-direction: column;
        height: 9rem;
        .home-banner-avatar {
          display: flex;
          justify-content: center;
          margin: 0 auto 0.5rem auto;
          width: 5rem;
          height: 5rem;
          border-radius: 2.5rem;
          background-size: contain;
        }
        .home-banner-title {
          font-weight: bold;
        }
      }
    }
    #item-1 {
      background-color: $AvaTheme;
      color: var(--asoul-invert-color);
      .home-banner-avatar {
        background-image: url("assets/avatar-ava.png");
      }
      /* &:hover {
        animation: ava-trans 0.5s both;
      } */
    }
    #item-2 {
      background-color: $BellaTheme;
      color: var(--asoul-invert-color);
      .home-banner-avatar {
        background-image: url("assets/avatar-bella.png");
      }
      /* &:hover {
        animation: bella-trans 0.5s both;
      } */
    }
    #item-3 {
      background-color: $CarolTheme;
      color: var(--asoul-invert-color);
      .home-banner-avatar {
        background-image: url("assets/avatar-carol.png");
      }
      /* &:hover {
        animation: carol-trans 0.5s both;
      } */
    }
    #item-4 {
      background-color: $DianaTheme;
      color: var(--asoul-invert-color);
      .home-banner-avatar {
        background-image: url("assets/avatar-diana.png");
      }
      /* &:hover {
        animation: diana-trans 0.5s both;
      } */
    }
    #item-5 {
      background-color: $EileenTheme;
      color: var(--asoul-invert-color);
      .home-banner-avatar {
        background-image: url("assets/avatar-eileen.png");
      }
      /* &:hover {
        animation: eileen-trans 0.5s both;
      } */
    }
  }
}

@keyframes slide-top {
  0% {
    margin-top: 9rem;
    height: 3rem;
  }
  100% {
    margin-top: 0;
    height: 12rem;
  }
}
@keyframes ava-trans {
  0% {
    color: $AvaTheme;
    background-color: var(--asoul-invert-color);
  }
  100% {
    color: var(--asoul-invert-color);
    background-color: $AvaTheme;
  }
}
@keyframes bella-trans {
  0% {
    color: $BellaTheme;
    background-color: var(--asoul-invert-color);
  }
  100% {
    color: var(--asoul-invert-color);
    background-color: $BellaTheme;
  }
}
@keyframes carol-trans {
  0% {
    color: $CarolTheme;
    background-color: var(--asoul-invert-color);
  }
  100% {
    color: var(--asoul-invert-color);
    background-color: $CarolTheme;
  }
}
@keyframes diana-trans {
  0% {
    color: $DianaTheme;
    background-color: var(--asoul-invert-color);
  }
  100% {
    color: var(--asoul-invert-color);
    background-color: $DianaTheme;
  }
}
@keyframes eileen-trans {
  0% {
    color: $EileenTheme;
    background-color: var(--asoul-invert-color);
  }
  100% {
    color: var(--asoul-invert-color);
    background-color: $EileenTheme;
  }
}
</style>
