// 源数据
var oldData = [
    {
      city_id: 1,
      city_name: '北京',
      city_img: "http://dfknbdjknvkjsfnvlkjdn.png",
      city_country: "中国"
    },
    {
      city_id: 2,
      city_name: '上海',
      city_img: "http://wergerbe.png",
      city_country: "中国"
    },
    {
      city_id: 3,
      city_name: '广州',
      city_img: "http://hrthhr.png",
      city_country: "中国"
    },
    {
      city_id: 4,
      city_name: '西雅图',
      city_img: "http://frevfd.png",
      city_country: "美国"
    },
    {
      city_id: 5,
      city_name: '纽约',
      city_img: "http://反而个.png",
      city_country: "美国"
    }
  ]
   
  // 把源数据先变成目标数据的规则
  var oldDataRule = []
  oldData.forEach(el => {
    var oldObj = {
      name: el.city_country,
      citys:[]
    }
    var cityObj = {
      city_name: el.city_name,
      city_img: el.city_img,
      city_id: el.city_id
    }
    oldObj.citys.push(cityObj)
    
    oldDataRule.push(oldObj)
  })
   
  /**
   * 先去重，后合并
   * 1、源数据去重
   * 2、把去重后的数据和源数据中相同name的数据合并citys
  */
  var newData = []
  var newObj = {}
  oldDataRule.forEach((el, i) => {
    if (!newObj[el.name]) {
      newData.push(el);
      newObj[el.name] = true;
    } else {
      newData.forEach(el => {
        if (el.name === oldDataRule[i].name) {
          el.citys = el.citys.concat(oldDataRule[i].citys);
          // el.citys = [...el.citys, ...oldDataRule[i].citys]; // es6语法
        }
      })
    }
  })
  console.log(newData); // 目标数据
  