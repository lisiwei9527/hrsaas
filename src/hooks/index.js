import { getRoleList } from '@/api/role'
import { onMounted, ref } from 'vue'

export function useRole(url) {
  const columns = [
    // 定义表格的表头
    {
      title: '角色名称',
      dataIndex: 'name'
    },
    { title: '启用', dataIndex: 'state' },
    { title: '描述', dataIndex: 'description' },
    { title: '操作', dataIndex: 'operate' }
  ]

  const dataSource = ref(null)
  const total = ref(0)
  const currentPage = ref({
    page: 1,
    pageSize: 5
  })

  // 修改页数触发
  const changePage = (newPage) => {
    currentPage.value.page = newPage
    //刷新列表
    getRoleListAPI()
  }

  // 获取角色列表
  const getRoleListAPI = async () => {
    const res = await getRoleList(currentPage.value)
    dataSource.value = res.rows
    total.value = res.total
    console.log(dataSource.value, total.value, 'need')
  }

  onMounted(() => {
    getRoleListAPI()
  })

  return { columns, dataSource, total, currentPage, changePage }
}
