import { Test, TestingModule } from '@nestjs/testing'
import { AirportsRepository } from 'src/airports/domain/airport.repository'
import { AppModule } from '../../../_app/app.module'
import { FindFlightsService } from './find-flights.service'

describe('SignInService', () => {
  let filterByKeyService: FindFlightsService
  let airportsRepository: AirportsRepository
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [],
      providers: []
    }).compile()

    filterByKeyService = app.get<FindFlightsService>(FindFlightsService)
    airportsRepository = app.get<AirportsRepository>(AirportsRepository)
  })

  afterAll(async () => {
    app.close()
  })
})
