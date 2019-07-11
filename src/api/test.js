import server from '@/utils/request.js'
export function list(params) {
  return server({
    url: '/rest/data/report/getListAgentPerformance',
    method: 'post',
    params: {
      token: 'MTU2MjYzNDQxNzY2MiwxMzUyMTUyNjMyMg==',
      searchMap: {'agentName': '', 'toTimeSE': '', 'fromTimeSE': ''}
    }
  })
}

export function lists(data) {
  return server({
    url: '',
    method: 'post',
    data
  })
}
