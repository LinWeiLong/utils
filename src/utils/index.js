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
