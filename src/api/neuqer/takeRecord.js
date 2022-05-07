import request from '@/utils/request'

// 查询领取记录列表
export function listTakeRecord(query) {
  return request({
    url: '/neuqer/takeRecord/list',
    method: 'get',
    params: query
  })
}

// 查询领取记录详细
export function getTakeRecord(id) {
  return request({
    url: '/neuqer/takeRecord/' + id,
    method: 'get'
  })
}

// 新增领取记录
export function addTakeRecord(data) {
  return request({
    url: '/neuqer/takeRecord',
    method: 'post',
    data: data
  })
}

// 修改领取记录
export function updateTakeRecord(data) {
  return request({
    url: '/neuqer/takeRecord',
    method: 'put',
    data: data
  })
}

// 删除领取记录
export function delTakeRecord(id) {
  return request({
    url: '/neuqer/takeRecord/' + id,
    method: 'delete'
  })
}
