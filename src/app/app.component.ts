import { Component } from '@angular/core';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory,
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { Contact } from './entities/contanct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'ngrx-data';
  public contactCollectionService: EntityCollectionService<Contact>;
  public contacts$: Observable<Contact[]>;
  constructor(
    private entityCollectionServiceFactory: EntityCollectionServiceFactory
  ) {
    this.contactCollectionService =
      this.entityCollectionServiceFactory.create<Contact>('Contact');
  }

  ngOnInit(): void {
    // this.getWithQuery();
    this.getAll();
    //   this.getById();
    //   // this.delete();
    //   this.add();
  }

  getAll() {
    this.contacts$ = this.contactCollectionService.getAll();
  }

  getWithQuery() {
    this.contactCollectionService.getWithQuery('active');
  }

  add() {
    const contact: Contact = {
      id: 4,
      name: 'Andrés Ospina',
      number: 44444,
    };
    this.contactCollectionService.add(contact);
  }

  cancel() {
    this.contactCollectionService.cancel(1);
  }

  getById() {
    this.contactCollectionService.getByKey(1);
  }

  delete() {
    this.contactCollectionService.delete(1);
  }
}
