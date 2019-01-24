<template>
  <div class="home">
    {{ version }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State, Getter } from 'vuex-class';

const namespace = 'global';

@Component
export default class Home extends Vue {
  @Getter('version', { namespace }) private version: string;
}
</script>
