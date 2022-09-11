import { HttpClient, HttpStatusCode } from '@infra/protocols/http'
import { Categories } from '@domain/usecases'

export class CategoriesService implements Categories {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) { }

  async get (): Promise<string[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.forbidden: throw new Error()
      default: throw new Error()
    }
  }
}
