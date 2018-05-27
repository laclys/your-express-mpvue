// 工具函数库

/**
 * 封装网络请求（get）
 * @param {*} url
 */
export function get (url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      success: function (res) {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}

export function showSuccess (text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}
