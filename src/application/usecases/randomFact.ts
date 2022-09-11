import { HttpClient, HttpStatusCode } from '@infra/protocols/http'
import { RandomFact } from '@domain/usecases'
import { Result } from '@domain/models'

export class RandomFactService implements RandomFact {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) { }

  async get (): Promise<Result> {
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
