import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private appService: AppService) {}
  searchedItem = null;
  changed(e: any) {
    this.searchedItem = e.target.value;
    console.log(this.searchedItem);
  }
  upload(e: any) {
    let select = e.target.files[0];
    const file = new FileReader();
    file.readAsDataURL(select);
    file.onloadend = () => {
      this.appService
        .upload(file.result as string)
        .subscribe((response: any) => {
          console.log('nothing');
          console.log(response);
        });
    };
  }
}
