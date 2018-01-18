// 数字补0
function NumAddZero(num, length) {
    return (Array(length).join('0') + num).slice(-length);
};

// 获取URL 中 Query
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};

// 判断Object 是否为空
function IsEmptyObj(obj) {
    let t;
    for (t in obj) {
        return !1;
    }
    return !0;
};

// 数组去重
// 简单去重
function ArrayUniq(theArray){
	return theArray.filter((item, idx, arr) => {
	  return arr.indexOf(item) === idx;
	});
}
// 支持基础类型和对象类型
function ArrayUniq2(theArray){
	 var prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];
  return a.filter(function(item) {
      var type = typeof item;
      if(type in prims)
          return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
      else
          return objs.indexOf(item) >= 0 ? false : objs.push(item);
  });
}
// ES6版本
function uniq(a) {
	// 通过Set 方法构造出来的数据，本身就有去重功能，因为Set本身的特性就是不允许重复的值
   return Array.from(new Set(a));
}
