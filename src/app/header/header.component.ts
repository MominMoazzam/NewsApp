import { Component, OnInit } from '@angular/core';
import {NewsApiServicesService} from '../service/news-api-services.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private newsApi:NewsApiServicesService) { }

  topHeadingArray : any = []

  ngOnInit(): void {
    this.newsApi.NewsApi().subscribe((data)=>{
      console.log(data);
      this.topHeadingArray = data.articles
    })
  }

}
