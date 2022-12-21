import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  title = 'urlTest';

  constructor(private httpClient : HttpClient){

  }


  fireLocal() {
    this.httpClient.get<any>('http://localhost:7553/api/home/ping').subscribe(data => {
        console.log(data);
    })   
  }
}
