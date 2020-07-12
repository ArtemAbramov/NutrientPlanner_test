import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatListModule} from '@angular/material/list'
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'
import {appReducers} from './store/reducers/app.reducers'
import {EffectsModule} from '@ngrx/effects'
import {RepositoriesEffects} from './store/effects/repositories.effects'
import {MatSelectModule} from '@angular/material/select'
import {AppRoutingModule} from './app-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { RepositoryPageComponent } from './repository-page/repository-page.component'
import {StoreRouterConnectingModule} from '@ngrx/router-store'
import {RepositoriesService} from './repositories.service'

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    RepositoryPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([RepositoriesEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    MatSelectModule,
    AppRoutingModule
  ],
  providers: [RepositoriesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
