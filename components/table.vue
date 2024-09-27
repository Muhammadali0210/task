<template>
  <table>
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.key">{{ column.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="row.key">
        <td v-for="column in columns" :key="column.key">
          <template v-if="column.dataIndex === 'tags'">

            <span
              v-for="(tag, index) in row[column.dataIndex]"
              :key="index"
              :class="tagClass(tag)"
            >
              {{ tag }}
            </span>
          </template>
          <template v-else-if="column.dataIndex === 'actions'">
            <a href="#" @click.prevent="invite(row)">Invite — {{ row.name }}</a> |
            <a href="#" @click.prevent="deleteRow(row)">Delete</a> |
            <a href="#" @click.prevent="moreActions(row)">More actions ▼</a>
          </template>
          <template v-else>
            {{ row[column.dataIndex] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Table",
  props: {
    data: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const tableData = ref([...props.data]);

    const tagClass = (tag) => {
      switch (tag) {
        case "NICE":
          return "tag-nice";
        case "LOSER":
          return "tag-loser";
        case "COOL":
          return "tag-cool";
        default:
          return "tag-default";
      }
    };

    const invite = (row) => {
      alert(`Invite sent to ${row.name}`);
    };

    const deleteRow = (row) => {
      const index = tableData.value.findIndex((r) => r.key === row.key);
      if (index !== -1) {
        tableData.value.splice(index, 1);
      }
    };

    const moreActions = (row) => {
      alert(`More actions for ${row.name}`);
    };

    return {
      tableData,
      tagClass,
      invite,
      deleteRow,
      moreActions,
    };
  },
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

td {
  background-color: #fff;
}

a {
  color: blue;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}

.tag-nice {
  background-color: #eaffea;
  color: green;
  padding: 2px 8px;
  border-radius: 4px;
  margin-right: 4px;
}

.tag-loser {
  background-color: #ffeaea;
  color: red;
  padding: 2px 8px;
  border-radius: 4px;
  margin-right: 4px;
}

.tag-cool {
  background-color: #eaffff;
  color: blue;
  padding: 2px 8px;
  border-radius: 4px;
  margin-right: 4px;
}

.tag-default {
  background-color: #f0f0f0;
  padding: 2px 8px;
  border-radius: 4px;
  margin-right: 4px;
}
</style>
