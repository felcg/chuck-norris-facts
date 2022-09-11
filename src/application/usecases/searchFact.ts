import { HttpClient, HttpStatusCode } from '@infra/protocols/http'
import { SearchFact } from '@domain/usecases'
import { SearchResponse } from '@domain/models'

export class SearchService implements SearchFact {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) { }

  async get (query: string): Promise<SearchResponse> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      params: {
        query: query
      },
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.forbidden: throw new Error()
      default: throw new Error()
    }
  }
}
