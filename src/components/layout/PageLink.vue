<script setup lang="ts">
import { usePageContext } from '@/composables/pageContext';

const props = defineProps<{ href: string }>();

const { pageContext } = usePageContext();
</script>

<template>
  <div>
    <a :href="props.href">
      <template v-if="pageContext.urlPathname === props.href">
        >
      </template>
      <slot />
    </a>
  </div>
</template>
