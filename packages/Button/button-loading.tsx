import { defineComponent } from "vue";

const ButtonLoading = defineComponent({
  setup(props, { attrs }) {
    return () => (
      <div class="asoul-btn-loading">
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 24 30"
          style="enable-background:new 0 0 50 50;"
        >
          <rect x="0" y="10" width="2" height="10" fill="currentColor" opacity="0.2">
            <animate
              attributeName="opacity"
              attributeType="XML"
              values="0.2; 1; .2"
              begin="0s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="height"
              attributeType="XML"
              values="10; 20; 10"
              begin="0s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              values="10; 5; 10"
              begin="0s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="8" y="10" width="2" height="10" fill="currentColor" opacity="0.2">
            <animate
              attributeName="opacity"
              attributeType="XML"
              values="0.2; 1; .2"
              begin="0.15s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="height"
              attributeType="XML"
              values="10; 20; 10"
              begin="0.15s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              values="10; 5; 10"
              begin="0.15s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="16" y="10" width="2" height="10" fill="currentColor" opacity="0.2">
            <animate
              attributeName="opacity"
              attributeType="XML"
              values="0.2; 1; .2"
              begin="0.3s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="height"
              attributeType="XML"
              values="10; 20; 10"
              begin="0.3s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              values="10; 5; 10"
              begin="0.3s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
    );
  },
});

export default ButtonLoading;
