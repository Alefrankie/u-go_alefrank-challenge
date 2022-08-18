import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/application/guards/jwt-auth.guards'
import { FilterByKeyDTO } from '../application/filter-by-key/filter-by-key.dto'
import { FilterByKeyService } from '../application/filter-by-key/filter-by-key.service'

@UseGuards(JwtAuthGuard)
@Controller('/cities')
export class CitiesController {
  constructor(private filterByKeyService: FilterByKeyService) {}

  @Post('/filter')
  async filter(@Body() body: FilterByKeyDTO) {
    return await this.filterByKeyService.run(body)
  }
}
