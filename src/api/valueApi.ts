import http from '@/utils/http'

export default {
  async getValues (value: string) {
    const res: any = await http.post('/values', value, {
      headers: { 'Content-Type': 'application/json' },
      transformRequest: [(data: any) => JSON.stringify(data)]
    })
    return res.data
  }
}
