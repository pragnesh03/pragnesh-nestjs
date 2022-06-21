import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostDetailService } from './post-detail.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  public idPost:any;
  public postDetail:any;
  constructor(private postDetailService: PostDetailService,
              private route:ActivatedRoute,
              private toastr:ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let historyState = window.history.state;
       this.idPost=historyState.idPost
    });
    if(!this.idPost){
      this.toastr.error('Post Id must be number.');
      this.router.navigateByUrl("/posts");
    }
    this.getPostDetails(this.idPost);
  }

  /**
   * get post details
   */
   getPostDetails(idPost:number){
    this.postDetailService.postDetail(idPost).subscribe({
      next: (response:any) => {
          this.postDetail=[response.data];
      },
      error: (e:any) => {
        if(e.error.message){
          this.toastr.error(e.error.message);
        }else{
          this.toastr.error("something went wrong");
        }
        this.router.navigateByUrl("/posts");
      }
    });
  }

}
