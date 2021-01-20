import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchedItem = null;
  changed(e: any) {
    this.searchedItem = e.target.value;
    console.log(this.searchedItem);
  }
  upload(e: any) {
    console.log(e.target.files[0]);
  }
}
