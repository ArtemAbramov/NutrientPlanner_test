import {IRepository} from './repository.interface'

export interface IGithubResponse {
  total_count: number
  incomplete_results: boolean
  items: IRepository[]
}
