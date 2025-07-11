Page({
  data: {
    sidebarVisible: false,
    categories: [
      { name: '全部分类', value: 'all' },
      { name: '默认分类', value: 'default' },
      // 可扩展更多分类
    ],
    // ...其他数据
  },
  showSidebar() {
    this.setData({ sidebarVisible: true });
  },
  hideSidebar() {
    this.setData({ sidebarVisible: false });
  },
  selectCategory(e) {
    const value = e.currentTarget.dataset.value;
    // 处理分类选择逻辑
    this.setData({ sidebarVisible: false });
    // ...其他逻辑
  }
});