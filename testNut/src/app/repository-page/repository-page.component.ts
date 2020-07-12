import {Component, OnDestroy, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {IAppState} from '../store/state/app.state'
import {ActivatedRoute} from '@angular/router'
import {selectRepository} from '../store/selectors/repositories.selectors'
import {GetRepository} from '../store/actions/repositories.actions'
import {IRepository} from '../interfaces/repository.interface'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-repository-page',
  templateUrl: './repository-page.component.html',
  styleUrls: ['./repository-page.component.scss']
})
export class RepositoryPageComponent implements OnInit, OnDestroy {
  repository: IRepository = null

  sSub: Subscription

  constructor(private store: Store<IAppState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sSub = this.store.pipe(select(selectRepository)).subscribe(repository => {
      this.repository = repository
    })
    this.store.dispatch(new GetRepository(this.route.snapshot.params.id))
  }

  ngOnDestroy(): void {
    if (this.sSub) {
      this.sSub.unsubscribe()
    }
  }
}
