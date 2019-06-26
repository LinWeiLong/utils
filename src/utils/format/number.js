function Format(fmt) {
  // 列出日期所有元素， 巧妙之处在于 o 里面的key，同时承担着正则的作用
  var o = {
    'Y+': this.getFullYear(),
    'M+': this.getMonth() + 1, //月份
    'D+': this.getDate(), //日
    'h+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    'S+': this.getMilliseconds() //毫秒
  }
  for (var k in o) {
    // 创建正则对象，匹配格式字符串
    if (new RegExp('(' + k + ')').test(fmt)) {
      // 匹配到字符串，就用对应的o里面的元素替换格式字符串的内容
      if (k == 'Y+') {
        fmt = fmt.replace(RegExp.$1, ('' + o[k]).substr(4 - RegExp.$1.length))
      } else if (k == 'S+') {
        var lens = RegExp.$1.length
        lens = lens == 1 ? 3 : lens
        fmt = fmt.replace(
          RegExp.$1,
          ('00' + o[k]).substr(('' + o[k]).length - 1, lens)
        )
      } else {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        )
      }
    }
  }
  return fmt
}

function dateFormat(date, fmt) {
  // todo check date
  return Format.call(date, fmt)
}
