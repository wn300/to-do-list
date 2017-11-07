import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToDoServiceProvider } from '../../providers/to-do-service/to-do-service';
import { Observable } from 'rxjs/Observable';
import { ToDo } from '../../app/app.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public toDo: Observable<ToDo[]>
  constructor(public navCtrl: NavController,public toDoServiceProvider: ToDoServiceProvider) {
    this.toDo = toDoServiceProvider.getToDo();
  }


  
}
