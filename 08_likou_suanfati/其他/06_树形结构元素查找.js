const address = [
    {
      id: 1,
      name: '北京市',
      children: [
        {
          id: 11,
          name: '海淀区',
          children: [
            {
              id: 111,
              name: '中关村',
            }
          ]
        }, {
          id: 12,
          name: '朝阳区',
        }
      ],
    }, {
      id: 2, name: '天津市'
    }]
  // 请实现该函数 
  // 输⼊：getNameById(address, 2)，输出："天津市" 
  // 输⼊：getNameById(address, 111)，输出："中关村" 
  // 输⼊：getNameById(address, 32)，输出："" （未查找到，输出空字符串） 
  function tree2List (tree) {
    return tree.reduce((accu, item) => {
      if (!item.children) {
        accu.push(item)
      } else {
        const subList = tree2List(item.children)
        accu.push(item, ...subList)
      }
      return accu
    }, [])
  }
  function getNameById (address, id) {
    // 在这⾥实现你的代码 
    // 1. 树形结构数据转数组（列表）
    const list = tree2List(address)
    // 2. 比对数组
    const result = list.find(item => item.id === id)
    return result ? result.name : ''
  }
  
  console.log(getNameById(address, 2))
  console.log(getNameById(address, 111))
  console.log(getNameById(address, 32))