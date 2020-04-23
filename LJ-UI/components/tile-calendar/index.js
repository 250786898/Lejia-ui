// pages/workOrder/components/dateSelector/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activeColor:{
      type: String,
      value:"#D6151B"
    }, //当前选择的日期颜色
    inactiveColor:{
      type:String,
      value:"#EF8A91"
    } //未选择的日期颜色
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: "",
    month: "",
    day: "",
    dayList: [],
    scrollId: ""
  },

  ready() {
    var date = new Date();
    var year = date.getFullYear();
    var month = this.addZero(date.getMonth() + 1);
    var day = this.addZero(date.getDate());
    this.setData({
      year,
      month,
      day
    })
    this.triggerEvent('searchByDate', `${year}/${month}/${day}`)
    this.getDaysList();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * @description 补零
     */
    addZero(num) {
      return num < 10 ? `0${num}` : num
    },

    /**
     * @description 改变选择年月
     * @param {*} e 
     */
    bindDateChange(e) {
      const trans = e.detail.value.split('-')
      this.setData({
        year: trans[0],
        month: trans[1]
      })
      this.getDaysList();
    },

    /**
     * @description 获取当月日期列表
     */
    getDaysList() {
      const days = this.mGetDate(this.timeToDate(`${this.data.year}-${this.data.month - 1}`));
      var dayList = [];
      for (let i = 0; i < days; i++) {
        dayList.push({
          day: i + 1,
          week: this.getCurrentDate(this.timeToDate(`${this.data.year}-${this.data.month}-${i + 1}`)),
          active: i + 1 == this.data.day ? 1 : 0
        })
      }
      this.setData({
        dayList,
        scrollId: `item${this.data.day-1}`
      })
    },

    /**
     * @description 获取当月天数
     * @param {*} myDate 
     */
    mGetDate(myDate) {
      var d = new Date(this.data.year, this.data.month, 0);
      return d.getDate();
    },

    /**
     * @description year-month-day 转换成Date格式
     * @param {*} date 
     */
    timeToDate(date) {
      return new Date(Date.parse(date.replace(/-/g, "/")))
    },

    /**
     * @description 获取当前日期的星期
     * @param {date} myDate 日期
     */
    getCurrentDate(myDate) {
      var days = myDate.getDay();
      switch (days) {
        case 1:
          days = '周一';
          break;
        case 2:
          days = '周二';
          break;
        case 3:
          days = '周三';
          break;
        case 4:
          days = '周四';
          break;
        case 5:
          days = '周五';
          break;
        case 6:
          days = '周六';
          break;
        case 0:
          days = '周日';
          break;
      }
      return days;
    },

    /**
     * @description 更改day
     * @param {*} e 
     */
    changeDay(e) {
      if (e.currentTarget.dataset.index + 1 !== this.data.day) {

        this.setData({
          ['dayList[' + e.currentTarget.dataset.index + '].active']: 1,
          ['dayList[' + (this.data.day - 1) + '].active']: 0,
          day: e.currentTarget.dataset.index + 1
        });
        this.triggerEvent('searchByDate', `${this.data.year}/${this.data.month}/${this.data.day}`)
      }
    }

  }
})
