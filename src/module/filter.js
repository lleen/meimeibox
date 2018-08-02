import Vue from 'vue'

import path from 'path'

Vue.filter('formImg', (url) => {
  let ext = path.extname(url)
  return url.replace(ext, '.thumb.750_0_c' + ext)
})
