import { IsNotEmpty } from 'class-validator'

export class FindFlightsDTO {
  @IsNotEmpty()
  origin: string

  @IsNotEmpty()
  destination: string

  @IsNotEmpty()
  budget: number
}
