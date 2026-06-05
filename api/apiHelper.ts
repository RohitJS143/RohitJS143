import { request } from '@playwright/test'

export async function createLead() {

  const apiContext = await request.newContext()

  const response = await apiContext.post('/api/leads', {
    data: {
      name: 'Test Lead'
    }
  })

  return response.json()
}