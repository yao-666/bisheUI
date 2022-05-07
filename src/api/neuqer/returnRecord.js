import request from '@/utils/request'

// 查询领取记录列表
export function listReturnRecord(query) {
  return request({
    url: '/neuqer/returnRecord/list',
    method: 'get',
    params: query
  })
}

// 查询领取记录详细
export function getReturnRecord(id) {
  return request({
    url: '/neuqer/returnRecord/' + id,
    method: 'get'
  })
}

// 新增领取记录
export function addReturnRecord(data) {
  return request({
    url: '/neuqer/returnRecord',
    method: 'post',
    data: data
  })
}

// 修改领取记录
export function updateReturnRecord(data) {
  return request({
    url: '/neuqer/returnRecord',
    method: 'put',
    data: data
  })
}

// 删除领取记录
export function delReturnRecord(id) {
  return request({
    url: '/neuqer/returnRecord/' + id,
    method: 'delete'
  })
}
