import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService, private http: HttpClient) {}
  label: any = '';
  searchedItem = null;
  arr = [];
  change1(e: any) {
    this.label = e.target.value;
    console.log(this.label);
  }
  changed(e: any) {
    this.searchedItem = e.target.value;
    console.log(this.searchedItem);
  }
  upload(e: any) {
    console.log(this.label);
    if (this.label.length !== 0) {
      let select = e.target.files[0];
      const file = new FileReader();
      file.readAsDataURL(select);
      file.onloadend = () => {
        this.appService
          .upload(file.result as string, this.label)
          .subscribe((response: any) => {
            console.log('nothing');
            console.log(response);
          });
      };
    }
  }
  delete(el: any) {
    console.log(el);
    this.http
      .post('http://localhost:8080/delete', { images: el })
      .subscribe((data: any) => {
        console.log(data);
      });
  }
  ngOnInit() {
    let k: any = [];
    this.http.get('http://localhost:8080/').subscribe((data: any) => {
      console.log(data);
      for (var i in data) {
        k.unshift(data[i].images);
      }
      this.arr = k;
    });
  }
}
