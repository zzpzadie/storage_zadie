Page({
  data: {
    date: '',
    amount: '',
    category: '',
    location: '',
    quantity: '',
    unit: '',
    spec: ''
  },
  onDateChange(e) {
    this.setData({ date: e.detail.value });
  },
  onAmountInput(e) {
    this.setData({ amount: e.detail.value });
  },
  onCategoryInput(e) {
    this.setData({ category: e.detail.value });
  },
  onLocationInput(e) {
    this.setData({ location: e.detail.value });
  },
  onQuantityInput(e) {
    this.setData({ quantity: e.detail.value });
  },
  onUnitInput(e) {
    this.setData({ unit: e.detail.value });
  },
  onSpecInput(e) {
    this.setData({ spec: e.detail.value });
  },
  onSubmit(e) {
    const { date, amount } = this.data;
    if (!date) {
      wx.showToast({ title: '请选择时间', icon: 'none' });
      return;
    }
    if (!amount) {
      wx.showToast({ title: '请输入金额', icon: 'none' });
      return;
    }
    wx.showToast({ title: '提交成功（模拟）', icon: 'success' });
    // TODO: 实际开发中提交到后端
  },
  onImportExcel() {
    wx.showToast({ title: '导入表格功能开发中', icon: 'none' });
    // TODO: 实现表格导入功能
  },
  onBackHome() {
    wx.reLaunch({ url: '/pages/index/index' });
  },
  onReady() {
    wx.hideLoading();
  }
}); 