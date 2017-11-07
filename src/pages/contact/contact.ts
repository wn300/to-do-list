import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, TextInput } from 'ionic-angular';
import { ToDoServiceProvider } from '../../providers/to-do-service/to-do-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  @ViewChild("description") descriptionInput: TextInput

  constructor(public navCtrl: NavController, public toDoServiceProvider: ToDoServiceProvider) {

  }

  postToDo() {
    debugger;
    this.toDoServiceProvider.postToDo({ id: null, decription: this.descriptionInput.value })

  }

}
