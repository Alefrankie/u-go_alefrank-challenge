import { ICity } from '../interfaces/ICity'

interface IProps {
  data: ICity[]
  id: string
}
export function CitiesList({ data, id }: IProps) {
  return (
    <datalist id={id}>
      {data.map((e) => (
        <option key={e.code} value={e.name}>
          {e.code} - {e.countryCode}
        </option>
      ))}
    </datalist>
  )
}
