import { SearchService } from '@application/usecases'
import { HttpClientSpy } from '../mocks/mock-http'
import { faker } from '@faker-js/faker'
import { HttpStatusCode } from '@infra/protocols/http'


type SutTypes = {
  sut: SearchService
  httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new SearchService(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('Search Fact', () => {
  test('Should query for fact with correct values', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)
    const queryValue = 'test'

    await sut.get(queryValue)
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('get')
  })

  test('Should throw Error if HttpClient returns 403', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.forbidden
    }

    const promise = sut.get('test')

    await expect(promise).rejects.toThrow(new Error())
  })

  test('Should throw Error if invalid statusCode is returned from HttpClient', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: 0
    }
    const promise = sut.get('')

    await expect(promise).rejects.toThrow(new Error())
  })
})