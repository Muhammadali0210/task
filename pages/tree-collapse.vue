<script setup lang="ts">
import { treeData } from '../constants/index';
</script>

<template>
    <div class="w-full min-h-[100vh] p-5">
      <TreeCollapse :items="treeData" />
    </div>
</template>
  
  