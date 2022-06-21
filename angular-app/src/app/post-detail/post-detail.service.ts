import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostDetailService {
  constructor(private httpClient: HttpClient) {
  }

  /**
   * post Details
   * @param idGroup 
   * @param page 
   * @returns 
   */
  postDetail(idPost: number): Observable<any> {
    var url = "http://localhost:3000/posts/"+idPost;
    return this.httpClient.get(url);
  }
}

