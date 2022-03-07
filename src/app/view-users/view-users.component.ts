import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/common.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
userdata:any=[];
articles:any=[]
  constructor(private commonserv:CommonService) { }

  ngOnInit(): void {
  

this.getData()

    
  }
  public getData(){   
     this.commonserv.getArticle().subscribe((data) => {   
         this.articles = data;    })  
        this.commonserv.getUser().subscribe((data)=>{  
            this.userdata = data;      
        this.userdata?.forEach((element : any) => {  
                let userArticles = this.articles.filter((p: any) => p.uid=== element.id); 
          console.log(userArticles)
                 element.articlesown = userArticles.length;    
          });    })  }
}
