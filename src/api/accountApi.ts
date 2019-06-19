import http from '@/utils/http'

export default {
  async login (username: string, password: string) {
    const res: any = await http.post('/Account/Login',
      {
        Username: username,
        Password: password
      },
      {
        headers: { 'Content-Type': 'application/json' },
        transformRequest: [(data: any) => JSON.stringify(data)]
      })
    return res.data
  },
  async test () {
    const res: any = await http.post('/Account/test')
  },
  async logout () {
    await http.post('/account/logout')
  }
}
