<template>
    <div class="bg-gray-500">
      <div v-for="(item, index) in items" :key="index">
        <div 
          @click="toggleCollapse(item)" 
          class="tree-item cursor-pointer p-2"
          :class="[{ 'selected': isSelected(item), 'active': !isCollapsed(item) }]"
        >
            <div>
                <span v-if="hasChildren(item)">
                    <Icon name="mdi:chevron-right"  :class="{'my-rotate': !isCollapsed(item)}" />
                </span>

                <span>{{ item.label }}</span>
            </div>
        </div>

        <div v-if="!isCollapsed(item)" class="tree-children">
          <TreeCollapse v-if="hasChildren(item)" :items="item.children" />  
        </div>
      </div>
    </div>
</template>
  
<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
items: {
    type: Array,
    required: true,
},
});

const collapsedItems = ref(new Set());
const selectedItem = ref(null);
const hoveredItem = ref(null);

const toggleCollapse = (item) => {
    if (collapsedItems.value.has(item)) {
        collapsedItems.value.delete(item);
    } else {
        collapsedItems.value.add(item);
    }
};

const isCollapsed = (item) => {
return collapsedItems.value.has(item);
};

const hasChildren = (item) => {
return item.children && item.children.length > 0;
};

const isSelected = (item) => {
return selectedItem.value === item;
};

const selectItem = (item) => {
selectedItem.value = item;
};
</script>
  
<style scoped>

.tree-children {
padding-left: 20px;
}

.my-rotate{
  transform: rotate(90deg);
}
</style>
  