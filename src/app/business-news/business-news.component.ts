import { Component, OnInit } from '@angular/core';
import { NewsApiServicesService } from '../service/news-api-services.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  constructor(private business : NewsApiServicesService) { }

  businessNewsArray : any = []
  ngOnInit(): void {
    this.business.BusinessNewsApi().subscribe((data)=>{
      this.businessNewsArray = data.articles;
      console.warn(this.businessNewsArray);
    })
  }

}
