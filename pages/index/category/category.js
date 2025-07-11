Page({
  data: {
    categories: [
      { name: '全部分类', value: 'all' },
      { name: '默认分类', value: 'default' },
      { name: '电子产品', value: 'electronics' },
      { name: '配件', value: 'accessories' }
    ]
  },
  onBackHome() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  }
}); 