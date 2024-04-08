import { Component, OnInit } from '@angular/core';
import {NewsApiServicesService} from '../service/news-api-services.service'
@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private servic : NewsApiServicesService) { }

  technologyNews : any = []

  ngOnInit(): void {
    this.servic.TechNewsApi().subscribe((data)=>{
      this.technologyNews = data.articles;
      console.warn(this.technologyNews);
    })
  }

}
