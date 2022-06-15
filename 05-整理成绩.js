const fs = require("fs");
fs.readFile("../素材/成绩.txt", "utf8", function (err, data) {
  if (err) {
    return console.log("读取文件失败");
  }
  // console.log(data);
  const arr = data.split(" ");
  const newArr = [];
  arr.forEach((item) => {
    newArr.push(item.replace("=", ":"));
  });
  let str = newArr.join("\r\n");
  console.log(str);
  fs.writeFile("./files/成绩-ok.txt", str, function (err) {
    if (err) {
      return console.log("写入文件失败");
    }
    console.log("写入文件成功");
  });
});
// const fs = require("fs");
// fs.readFile("../素材/成绩.txt", "utf8", (err, res) => {
//   if (err) return console.log("文件复去失败！" + err.message);

//   // 1、先把成绩的数据，按照空格进行分割
//   const arrOld = res.split(" ");
//   // 2、循环分割后的数组，对每一项数据进行字符串的替换操作
//   const arrNew = [];
//   arrOld.forEach((item) => {
//     arrNew.push(item.replace("=", ":"));
//   });
//   // 3、把新数组中的每一项，进行合并，得到一个新的字符串
//   const newStr = arrNew.join("\r\n");
//   //  数据写入成绩-ok.txt文件中
//   fs.writeFile("./files/成绩-ok.txt", newStr, (err) => {
//     if (err) return console.log("写入成绩失败！" + err.message);
//     console.log("写入成绩成功！");
//   });
// });

// // \r\n
