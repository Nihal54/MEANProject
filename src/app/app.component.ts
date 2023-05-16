import { Component, OnInit } from '@angular/core';
import { MarvellousService } from './marvellous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message : any;
  constructor(private service : MarvellousService)
  {

  }

  displayData()
  {
    this.service.getbatches().subscribe(data=>{
      this.message=data;
    })
  }
  
}
