import 'handsontable/dist/handsontable.css'
import Handsontable from 'handsontable'
const data = [
  ["", "Ford", "Volvo", "Toyota", "Honda"],
  ["2016", 10, 11, 12, 13],
  ["2017", 20, 11, 14, 13],
  ["2018", 30, 15, 12, 13]
];

const container = document.querySelector('#hot');
const hot = new Handsontable(container, {
  data: JSON.parse(JSON.stringify(data)),
  startRows: 15, // 行初始值  没有data选项的时候生效
  startCols: 15, // 列初始值  没有data选项的时候生效
  rowHeaders: true, //行标题
  // rowHeaders: [11, 21, 31, 41, 51],
  // rowHeaders: function(index) {
  //   return index + ': AB';
  // },
  colHeaders: true, //列标题
  // colHeaders: [11, 21, 31, 41, 51],
  // colHeaders: function(index) {
  //   return index + ': AB';
  // },
  minSpareRows: 10, // 空行
  minSpareCols: 10, // 空列,
  // columns: [ // 设置固定列数
  //   {
  //     data: '',
  //     type: 'numeric',
  //     width: 40
  //   },
  //   {
  //     data: 'Ford',
  //     type: 'numeric',
  //     width: 40
  //   },
  //   {
  //     data: 'Volvo',
  //     type: 'numeric',
  //     width: 40
  //   },
  //   {
  //     data: 'Toyota',
  //     type: 'numeric',
  //     width: 40
  //   },
  //   {
  //     data: 'Honda1',
  //     type: 'numeric',
  //     width: 40
  //   }
  // ],
  afterChange: (afterData) => {
    // afterData 是个数组 [1,0, '5', '51'] 1表示第一行，0表示第0列， '5表示'修改之前的数据 '51表示'修改之后的数据
    console.log(afterData)
  }
});