// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  let table_category = await db.collection('category').get()
  let result = []
  for (index in table_category.data) {
    let category_item = table_category.data[index]
    console.log(category_item)

    let table_album = await db.collection('album').where({
      category_id: category_item.id
    }).get()

    let item = {}
    item.category_id = category_item.id
    item.category_name = category_item.name
    item.albums = table_album.data

    result[index] = item
  }
  //[{"category_id":"", "category_name":"111", albums:[{}]}]
  return result
}