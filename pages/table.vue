<script lang="ts" setup>
import { data, column } from '../constants/index';

</script>

<template>
    <div class="w-full min-h-[100vh] p-5">
        <Table :columns="column" :data="data" />
    </div>
</template>