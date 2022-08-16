import { Body, Controller, Post } from '@nestjs/common'
import { FilterByKeyDTO } from '../application/filter-by-key/filter-by-key.dto'
import { FilterByKeyService } from '../application/filter-by-key/filter-by-key.service'

@Controller('/airports')
export class AirportsController {
  constructor(private filterByKeyService: FilterByKeyService) {}

  @Post('/filter')
  async filter(@Body() body: FilterByKeyDTO) {
    return await this.filterByKeyService.run(body)
  }
}
