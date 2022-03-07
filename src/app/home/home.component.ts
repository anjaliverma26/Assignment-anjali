
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


usersArticle:any=[];
article:any=[];
title:any;
discription:any
  constructor(private commonserv:CommonService,private router:Router) { }

  ngOnInit(): void {
    this.commonserv.getArticle().subscribe((data:any)=>{
      console.log(data);
      this.usersArticle=data;
      //console.log(this.usersProfile);
// this.commonserv.getArticle().subscribe((data:any)=>{
//  // console.log(data);
// this.article=data;

// })
    })
    
  }
  displayStyle = "none";
  
  openPopup(data:any) {
    console.log(data)
   // console.log(item);
  
   this.article=data;
   this.displayStyle = "block";
   
   //console.log(this.exactArticle)
   console.log(this.article)
  this.title= this.article.t
   this.discription=this.article.discription
    

  }
  
  closePopup() {
    this.displayStyle = "none";
  }



  

}
