import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  buttonDisabled='';
  constructor(private toastr: ToastrService,
              private router: Router) {}

  ngOnInit(): void {
  }

    
  /**
   * submit form
   */
  onSubmit() {
    var idPost:any=((document.getElementById('idPost') as HTMLInputElement).value);
    if(isNaN(idPost) === true || idPost.length < 1){
      this.toastr.error('Post Id must be number.');
      return false;
    }
    this.router.navigateByUrl("/post-detail",{ state: { idPost: idPost } });
    return;
  }

}
