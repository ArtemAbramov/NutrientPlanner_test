import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {SearchPageComponent} from './search-page/search-page.component'
import {RepositoryPageComponent} from './repository-page/repository-page.component'

const routes: Routes = [
  {path: '', component: SearchPageComponent},
  {path: 'repo/:id', component: RepositoryPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
