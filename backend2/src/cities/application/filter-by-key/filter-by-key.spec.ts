import { Test, TestingModule } from '@nestjs/testing'
import { AirportsRepository } from '../../../airports/domain/airport.repository'
import { AppModule } from '../../../_app/app.module'
import { FilterByKeyService } from './filter-by-key.service'

describe('SignInService', () => {
  let filterByKeyService: FilterByKeyService
  let airportsRepository: AirportsRepository
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [],
      providers: []
    }).compile()

    filterByKeyService = app.get<FilterByKeyService>(FilterByKeyService)
    airportsRepository = app.get<AirportsRepository>(AirportsRepository)
  })

  it("should return credentials invalid when I'm not registered", async () => {
    expect(
      filterByKeyService.run({
        key: 'undefined@undefined.com'
      })
    ).rejects.toThrow('Credentials invalid!')
  })

  it("should return Incorrect password when I'm registered", async () => {
    expect(
      filterByKeyService.run({
        key: 'undefined@undefined.com'
      })
    ).rejects.toThrow('Incorrect password!')
  })

  afterAll(async () => {
    app.close()
  })
})
