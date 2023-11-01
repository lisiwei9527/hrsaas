<script setup>
import { useRole } from '@/hooks/index'
const { columns, dataSource, total, currentPage, changePage } = useRole()
</script>
<template>
  <!-- 表格与页码组件合并了 -->
  <a-table
    :columns="columns"
    :dataSource="dataSource"
    :pagination="{ total, ...currentPage, onChang: changePage }"
  >
    <template>
      <a-popconfirm
        v-if="dataSource.length"
        title="Sure to delete?"
        @confirm="onDelete(record.key)"
      >
        <a>Delete</a>
      </a-popconfirm>
    </template>
  </a-table>
</template>

<style lang="scss" scoped></style>
