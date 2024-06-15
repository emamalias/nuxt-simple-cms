<script setup>
import { useLayout } from './composables/layout';
import { computed } from 'vue';
const { layoutConfig } = useLayout();
</script>

<template>
    <div class="layout-footer">
        by
        <span class="font-medium ml-2">emamalias</span>
    </div>
</template>
<style lang="scss" scoped></style>
