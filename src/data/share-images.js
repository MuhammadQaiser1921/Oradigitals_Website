const fs = require('fs')
const path = require('path')

const shareDir = path.join(__dirname, '..', '..', 'public', 'images', 'share')

// A page's own share picture once it has been generated (npm run images); until then the page uses the site default
function shareImage(name) {
  return fs.existsSync(path.join(shareDir, `${name}.png`)) ? `/public/images/share/${name}.png` : undefined
}

module.exports = { shareImage }
