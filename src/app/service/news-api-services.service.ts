import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsApiServicesService {

  constructor(private http:HttpClient) { }

  apiKey:string = "8891fcce9f7a43c697878411570411af"

  //  TopHeadlines Url
  newsApiurl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8891fcce9f7a43c697878411570411af"
  NewsApi() :Observable<any>{
  return this.http.get(this.newsApiurl)
  }

  //    TechNews Url
  techNewsurl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8891fcce9f7a43c697878411570411af"

  TechNewsApi():Observable<any>{
    return this.http.get(this.techNewsurl);
  }

  // BusinessNews Url
  businessurl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8891fcce9f7a43c697878411570411af"

  BusinessNewsApi() : Observable<any>{
    return this.http.get(this.businessurl);
  }
}

