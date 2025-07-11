// index.js
Page({
  data: {
    userName: '管理员',
    currentDate: '',
    monthInValue: '¥0',
    lowStockCount: 0,
    todayTransactions: 0,
    recentProducts: [],
    recentActivities: []
  },

  onLoad() {
    this.initPage();
  },

  onShow() {
    this.loadData();
  },

  // 初始化页面
  initPage() {
    this.setCurrentDate();
    this.loadData();
  },

  // 设置当前日期
  setCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const weekday = weekdays[now.getDay()];
    
    this.setData({
      currentDate: `${year}-${month}-${day} ${weekday}`
    });
  },

  // 加载数据
  loadData() {
    this.loadStatistics();
    this.loadRecentProducts();
    this.loadRecentActivities();
  },

  // 加载统计数据
  loadStatistics() {
    // 模拟数据，实际项目中应该从API获取
    this.setData({
      monthInValue: '¥32,800',
      lowStockCount: 8
    });
  },

  // 加载最近商品
  loadRecentProducts() {
    // 模拟数据
    const products = [
      {
        id: 1,
        name: 'iPhone 15 Pro',
        category: '电子产品',
        stock: 25,
        minStock: 10,
        unit: '台'
      },
      {
        id: 2,
        name: 'MacBook Air M2',
        category: '电子产品',
        stock: 8,
        minStock: 15,
        unit: '台'
      },
      {
        id: 3,
        name: 'AirPods Pro',
        category: '配件',
        stock: 45,
        minStock: 20,
        unit: '个'
      },
      {
        id: 4,
        name: 'iPad Air',
        category: '电子产品',
        stock: 12,
        minStock: 10,
        unit: '台'
      }
    ];

    this.setData({
      recentProducts: products
    });
  },

  // 加载最近活动
  loadRecentActivities() {
    // 模拟数据
    const activities = [
      {
        id: 1,
        icon: '📦',
        text: 'iPhone 15 Pro 入库 50台',
        time: '10分钟前'
      },
      {
        id: 2,
        icon: '📤',
        text: 'MacBook Air M2 出库 3台',
        time: '30分钟前'
      },
      {
        id: 3,
        icon: '⚠️',
        text: 'AirPods Pro 库存预警',
        time: '1小时前'
      },
      {
        id: 4,
        icon: '📋',
        text: '生成本月库存报表',
        time: '2小时前'
      }
    ];

    this.setData({
      recentActivities: activities
    });
  },

  // 搜索商品
  searchProduct() {
    wx.showToast({
      title: '搜索功能开发中',
      icon: 'none'
    });
  },

  // 生成报表
  showCategory() {
    wx.navigateTo({
      url: '/pages/index/category/category'
    });
  },

  // 查看全部商品
  viewAllProducts() {
    wx.switchTab({
      url: '/pages/stock/stock'
    });
  },

  // 查看商品详情
  viewProduct(e) {
    const productId = e.currentTarget.dataset.id;
    wx.showToast({
      title: `查看商品 ${productId}`,
      icon: 'none'
    });
  },

  // 下拉刷新
  onPullDownRefresh() {
    this.loadData();
    wx.stopPullDownRefresh();
  },

  // 入库
  inStock() {
    wx.navigateTo({
      url: '/pages/in-stock/in-stock'
    });
  },

  // 出库
  outStock() {
    wx.showToast({
      title: '出库功能开发中',
      icon: 'none'
    });
  },
});
