<script lang="ts" setup>

</script>

<template>
    <div class="w-full min-h-[100vh]">
        <div class="container">
            <h1 class="text-[48px] font-bold text-black dark:text-green-400 text-center p-14">Welcome to my project</h1>

            <div class="flex gap-5 items-center w-full h-[60vh] justify-center">
                <NuxtLink to="/tree-collapse">
                    <div class="min-w-[200px] text-center shadow-md shadow-green-500 border border-black dark:border-green-400 p-3 rounded-lg font-semibold text-gray-500 dark:text-green-400 text-lg">Tree Collapse</div>
                </NuxtLink>
                <NuxtLink to="/table">
                    <div class="min-w-[200px] text-center shadow-md shadow-green-500 border border-black dark:border-green-400 p-3 rounded-lg font-semibold text-gray-500 dark:text-green-400 text-lg">Table</div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>