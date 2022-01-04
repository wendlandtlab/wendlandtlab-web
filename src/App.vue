<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';

useMeta({
  title: '',
})
export default defineComponent({
  name: 'App',
});
</script>
<template>
    <metainfo>
        <template v-slot:title="{ content }">
            {{ content ? `${content} | Wendlandt Lab`: 'Wendlandt Lab'}}
        </template>
    </metainfo>
  <router-view />
</template>
