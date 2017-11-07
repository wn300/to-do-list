import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFirestore } from 'angularfire2/firestore';
import { ToDo } from '../../app/app.model';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ToDoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToDoServiceProvider {

  constructor(private fs: AngularFirestore) {
    console.log('Hello ToDoServiceProvider Provider');
  }

  getToDo(): Observable<ToDo[]> {
    return this.fs.collection<ToDo>('/ToDo').valueChanges()
  }

  postToDo(newtodo: ToDo): void {
    newtodo.id = this.fs.createId();
    this.fs.doc(`/ToDo/${newtodo.id}`).set(newtodo);
  }
}
