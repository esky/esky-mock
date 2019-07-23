'use strict'
const chokidar = require('chokidar');
const path = require('path');
let watcher;
function clearCache(mod) {
  if (!mod) return;
  delete require.cache[mod.id]
  mod.children.forEach(function (item) {
    clearCache(item);
  });
}
module.exports = {
  start: function () {
    let dataDir = global.__mockDataDir;
    if (!watcher) {
      watcher = chokidar.watch(dataDir, {
        persistent: true
      });
    }
    watcher.on('ready', function () {
      console.log('开始监听假数据文件');
      // 'add', 'addDir' and 'change' events also receive stat() results as second
      // argument when available: http://nodejs.org/api/fs.html#fs_class_fs_stats
      watcher.on('change', (path, stats) => {
        console.log(`【更新】${path}！`);
        // delete require.cache[require.resolve(path)];
        clearCache(require.cache[require.resolve(dataDir)]);
      });
      watcher.on('add', (path, stats) => {
        console.log(`【新增】${path}`);
        // delete require.cache[require.resolve(path)];
        clearCache(require.cache[require.resolve(dataDir)]);
      });
    });

    // watcher.on('all', (event, path) => {
    // 	console.log(event, path);
    // });
  }
}
