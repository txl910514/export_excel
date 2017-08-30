import 'handsontable/dist/handsontable.css'
import Handsontable from 'handsontable'
const data = [
  {
    id:1,
    name:{
      first: '大',
      last:'小'
    },
    text:'hhhhff',
    age:18,
    height:'169cm',
    weight:'60kg'
  },
  {
    id:1,
    name:{
      first: '大'
    },
    text:'hhhhff',
    age:18,
    height:'169cm',
    weight:'60kg'
  },
  {
    id:1,
    text:'hhhhff',
    age:18,
    height:'169cm',
    weight:'60kg'
  },
  {
    id:1,
    name:{
      last:'小'
    },
    text:'hhhhff',
    age:18,
    height:'169cm',
    weight:'60kg'
  },
  {
    id:1,
    name:{
      first: '大',
      last:'小'
    },
    text:'hhhhff',
    age:18,
    height:'169cm',
    weight:'60kg'
  },
  {
    id:1,
    name:{
      first: '大',
      last:'小'
    },
    text:'hhhhff',
    age:18,
    height:'169cm',
    weight:'60kg'
  },
  {
    id:1,
    name:{
      first: '大',
      last:'小'
    },
    text:'hhhhff',
    age:18,
    height:'169cm',
    weight:'60kg'
  },
  {
    id:1,
    name:{
      first: '大',
      last:'小'
    },
    text:'hhhhff',
    age:18,
    height:'169cm',
    weight:'60kg'
  },
  {
    id:1,
    name:{
      first: '大',
      last:'小'
    },
    text:'hhhhff',
    age:18,
    height:'169cm',
    weight:'60kg'
  },
  {
    id:1,
    name:{
      first: '大',
      last:'小'
    },
    text:'hhhhff',
    age:18,
    height:'169cm',
    weight:'60kg'
  }

];

const container = document.querySelector('#hot');
// const hot = new Handsontable(container, {
//   data: JSON.parse(JSON.stringify(data)),
//   startRows: 15, // 行初始值  没有data选项的时候生效
//   startCols: 15, // 列初始值  没有data选项的时候生效
//   rowHeaders: true, //行标题
//   // rowHeaders: [11, 21, 31, 41, 51],
//   // rowHeaders: function(index) {
//   //   return index + ': AB';
//   // },
//   colHeaders: ['id', '姓名', '别名', '文本', '年龄', '身高', '体重'], //列标题
//   // colHeaders: [11, 21, 31, 41, 51],
//   // colHeaders: function(index) {
//   //   return index + ': AB';
//   // },
//   minSpareRows: 10, // 空行
//   minSpareCols: 10, // 空列,
//   // columns: (column) => {
//   //   var columnMeta = {};
//   //   if (column === 0) {
//   //     columnMeta.data = 'id'
//   //   }
//   //   else if (column === 1) {
//   //     columnMeta.data = 'name.first'
//   //   }
//   //   else if (column === 2) {
//   //     columnMeta.data = 'name.last'
//   //   }
//   //   else if (column === 3) {
//   //     columnMeta.data = 'text'
//   //   }
//   //   else if (column === 4) {
//   //     columnMeta.data = 'age'
//   //   }
//   //   else if (column === 5) {
//   //     columnMeta.data = 'height'
//   //   }
//   //   else if (column === 6) {
//   //     columnMeta.data = 'weight'
//   //   }
//   //   else {
//   //     columnMeta = {}
//   //   }
//   //   return columnMeta
//   //
//   //
//   // },
//   columns:[
//     {data: 'id'},
//     {data: 'name.first'},
//     {data: 'name.last'},
//     {data: 'text'},
//     {data: 'age'},
//     {data: 'height'},
//     {data: 'weight'},
//   ],
//   afterChange: (afterData) => {
//     // afterData 是个数组 [1,0, '5', '51'] 1表示第一行，0表示第0列， '5表示'修改之前的数据 '51表示'修改之后的数据
//     console.log(afterData)
//   }
// });

// const data1 = [{
//   id: 1,
//   name:{
//     first:'min',
//     last:'max'
//   },
//   address: 'hjgdengsheng'
// }]
// new Handsontable(container, {
//   data: data1,
//   readOnly: true, //只读
//   dataSchema: {id: null, name: {first: null, last: null}, address: null},
//   startRows: 5,
//   startCols: 4,
//   colHeaders: ['ID', 'First Name', 'Last Name', 'Address'],
//   columns: [
//     {data: 'id', readOnly: true},
//     {data: 'name.first'},
//     {data: 'name.last', readOnly: true},
//     {data: 'address'}
//   ],
//   cell: [
//     {row: 0, col: 1, readOnly: true} //第0行1列只读
//   ],
//   cells: function (row, col, prop) {
//     var cellProperties = {}
//
//     if (row === 0 && col === 2) {
//       cellProperties.readOnly = true; //第0行2列只读
//     }
//
//     return cellProperties;
//   },
//   minSpareRows: 1
// });

// new Handsontable(container, {
//   data: [
//     model({id: 1, name: 'Ted Right', address: ''}),
//     model({id: 2, name: 'Frank Honest', address: ''}),
//     model({id: 3, name: 'Joan Well', address: ''}),
//     model({id: 4, name: 'Gail Polite', address: ''}),
//     model({id: 5, name: 'Michael Fair', address: ''})
//   ],
//   dataSchema: model,
//   colHeaders: ['ID', 'Name', 'Address'],
//   columns: [
//     {data: property('id')},
//     {data: property('name')},
//     {data: property('address')}
//   ],
//   minSpareRows: 1
// });
//
// function model(opts) {
//   var
//     _pub = {},
//     _priv = {
//       "id": undefined,
//       "name": undefined,
//       "address": undefined
//     };
//
//   for (var i in opts) {
//     if (opts.hasOwnProperty(i)) {
//       _priv[i] = opts[i];
//     }
//   }
//
//   _pub.attr = function (attr, val) {
//     if (typeof val === 'undefined') {
//       window.console && console.log("\t\tGET the", attr, "value of", _pub);
//       return _priv[attr];
//     }
//     window.console && console.log("SET the", attr, "value of", _pub);
//     _priv[attr] = val;
//
//     return _pub;
//   };
//
//   return _pub;
// }
//
// function property(attr) {
//   return function (row, value) {
//     return row.attr(attr, value);
//   }
// }




/**
保存到本地
 */

// var
//   $$ = function(id) {
//     return document.getElementById(id);
//   },
//   container = $$('example1'),
//   exampleConsole = $$('example1console'),
//   autosave = $$('autosave'),
//   load = $$('load'),
//   save = $$('save'),
//   autosaveNotification,
//   hot;
//
// hot = new Handsontable(container, {
//   startRows: 8,
//   startCols: 6,
//   rowHeaders: true,
//   colHeaders: true,
//   afterChange: function (change, source) {
//     if (source === 'loadData') {
//       return; //don't save this change
//     }
//     if (!autosave.checked) {
//       return;
//     }
//     clearTimeout(autosaveNotification);
//     ajax('scripts/json/save.json', 'GET', JSON.stringify({data: change}), function (data) {
//       exampleConsole.innerText  = 'Autosaved (' + change.length + ' ' + 'cell' + (change.length > 1 ? 's' : '') + ')';
//       autosaveNotification = setTimeout(function() {
//         exampleConsole.innerText ='Changes will be autosaved';
//       }, 1000);
//     });
//   }
// });
//
// Handsontable.dom.addEvent(load, 'click', function() {
//   ajax('scripts/json/load.json', 'GET', '', function(res) {
//     var data = JSON.parse(res.response);
//
//     hot.loadData(data.data);
//     exampleConsole.innerText = 'Data loaded';
//   });
// });
//
// Handsontable.dom.addEvent(save, 'click', function() {
//   // save all cell's data
//   ajax('scripts/json/save.json', 'GET', JSON.stringify({data: hot.getData()}), function (res) {
//     var response = JSON.parse(res.response);
//
//     if (response.result === 'ok') {
//       exampleConsole.innerText = 'Data saved';
//     }
//     else {
//       exampleConsole.innerText = 'Save error';
//     }
//   });
// });
//
// Handsontable.dom.addEvent(autosave, 'click', function() {
//   if (autosave.checked) {
//     exampleConsole.innerText = 'Changes will be autosaved';
//   }
//   else {
//     exampleConsole.innerText ='Changes will not be autosaved';
//   }
// });









new Handsontable(container,{
  data: Handsontable.helper.createSpreadsheetData(30, 20),
  width: 584,  // 容器宽度
  height: 320, //容器高度
  colWidths: 47, // 列宽度
  rowHeights: 23, // 行高度
  rowHeaders: true,
  colHeaders: true,
  // fixedRowsTop: 2, //固定上面两行
  // fixedColumnsLeft: 3, //固定左边三列
  fixedRowsBottom:4, //免费版没效
  // manualColumnResize: true, // 上边尺寸
  // manualRowResize: true // 左边尺寸
  manualColumnMove: true, // 感觉跟上面两参数一样
  manualRowMove: true
});
