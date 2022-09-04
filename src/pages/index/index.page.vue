<script setup lang="ts">
import { useHead } from '@vueuse/head';
import PageLink from '@/components/layout/PageLink.vue';
import CounterWidget from '@/components/CounterWidget.vue';

const props = defineProps<{
  health: string,
}>();

useHead({
  title: 'index',
});
</script>

<template>
  {{ props.health }}
  <PageLink href="/">
    Index
  </PageLink>
  <PageLink href="/about">
    About
  </PageLink>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <CounterWidget /></li>
  </ul>
</template>
