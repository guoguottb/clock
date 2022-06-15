const fs = require("fs");
const path = require("path");
const reCss = /<style>[\s\S]*<\/style>/;
const reJs = /<script>[\s\S]*<\/script>/;
fs.readFile(
  path.join(__dirname, "../素材/index.html"),
  "utf8",
  function (err, data) {
    if (err) {
      return console.log("读取index.html文件失败");
    }
    extCss(data);
    extJs(data);
    extHtml(data);
  }
);
//导出css方法
function extCss(data) {
  let newCss = reCss.exec(data)[0];
  newCss = newCss.replace("<style>", "").replace("</style>", "");
  fs.writeFile(
    path.join(__dirname, "./clock/index.css"),
    newCss,
    function (err) {
      if (err) {
        return console.log("写入css文件失败");
      }
      console.log("写入css文件成功");
    }
  );
}
//导出js方法
function extJs(data) {
  let newJs = reJs.exec(data)[0];
  newJs = newJs.replace("<script>", "").replace("</script>", "");
  fs.writeFile(path.join(__dirname, "./clock/index.js"), newJs, function (err) {
    if (err) {
      return console.log("写入js文件失败");
    }
    console.log("写入js文件成功");
  });
}
//导出inde.html
function extHtml(data) {
  let newHtml = data
    .replace(reCss, `<link rel="stylesheet" href="./index.css" />`)
    .replace(reJs, `<script src="./index.js"></script>`);
  fs.writeFile(
    path.join(__dirname, "./clock/index.html"),
    newHtml,
    function (err) {
      if (err) {
        return console.log("写入html文件失败");
      }
      console.log("写入html文件成功");
    }
  );
}
