import { Body, Controller, Post } from '@nestjs/common'
import { FindFlightsDTO } from '../application/find-flights/find-flights.dto'
import { FindFlightsService } from '../application/find-flights/find-flights.service'

@Controller('/airlines')
export class AirlinesController {
  constructor(private findFlightsService: FindFlightsService) {}

  @Post('/flights')
  async flights(@Body() body: FindFlightsDTO) {
    return this.findFlightsService.run(body)
  }
}
