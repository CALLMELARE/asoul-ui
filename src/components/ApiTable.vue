<template>
  <table class="api-table">
    <thead>
      <tr>
        <th>{{ $t("api.name") }}</th>
        <th>{{ $t("api.type") }}</th>
        <th>{{ $t("api.default") }}</th>
        <th>{{ $t("api.option") }}</th>
        <th>{{ $t("api.desc") }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-bind:key="i" v-for="i in apidata">
        <td>{{ i.name }}</td>
        <td>{{ i.type }}</td>
        <td>{{ i.default }}</td>
        <td>{{ i.option }}</td>
        <td>{{ i.desc }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import {} from "asoul-ui";
import { PropType, reactive } from "vue";
type apiType = {
  name: string;
  type: string;
  default: string;
  option: string;
  desc: string;
};
export default {
  name: "Menu",
  components: {},
  props: {
    api: Array as PropType<apiType[]>,
  },
  setup(props: any) {
    const apidata = reactive(props.api);
    return { apidata };
  },
};
</script>

<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

.api-table {
  border-collapse: collapse;
  width: 100%;
  border-spacing: 0;
  empty-cells: show;
  border-radius: 5px;
  overflow: hidden;
}

.api-table caption {
  color: var(--asoul-primary-color);
  font: italic 85%/1 arial, sans-serif;
  padding: 1em 0;
  text-align: center;
}

.api-table th {
  color: var(--asoul-invert-color);
  border-width: 0 0 0 1px;
  font-size: inherit;
  margin: 0;
  overflow: visible;
  padding: 0.5em 1em;
  text-align: center;
  font-weight: normal;
}

.api-table td {
  color: var(--asoul-secondary-color);
  border-width: 0 0 0 1px;
  font-size: inherit;
  margin: 0;
  overflow: visible;
  padding: 0.5em 1em;
  text-align: center;
  font-weight: normal;
}

.api-table thead {
  background-color: var(--asoul-theme-color-90);
  color: var(--asoul-primary-color);
  text-align: left;
  vertical-align: bottom;
  font-weight: normal;
}

.api-table td {
  background-color: transparent;
  font-weight: lighter;
}
</style>
