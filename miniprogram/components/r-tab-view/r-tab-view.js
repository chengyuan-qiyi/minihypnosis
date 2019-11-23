// components/r-tab-view/r-tab-view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handTap(event) {
      console.log(event)
      this.setData({
        currentIndex : event.currentTarget.dataset.index
      })

      const index = event.currentTarget.dataset.index
      this.triggerEvent("itemClick", {index, title:this.properties.items[index]}, {})
    }
  }
})
