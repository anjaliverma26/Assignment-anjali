import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { CommonService } from 'src/common.service';

@Component({
  selector: 'app-specific-user-profile',
  templateUrl: './specific-user-profile.component.html',
  styleUrls: ['./specific-user-profile.component.css']
})
export class SpecificUserProfileComponent implements OnInit {
usersProfile:any=[];
article:any=[];
tid:any=[];
Details:any=[];
exactDetail:any=[];
exactArticle:any=[];
  constructor(private commonserv:CommonService,private router:Router) { }

  ngOnInit(): void {
    this.commonserv.getUser().subscribe((data:any)=>{
      //console.log(data);
      this.usersProfile=data;
      //console.log(this.usersProfile);
// this.commonserv.getArticle().subscribe((data:any)=>{
//  // console.log(data);
// this.article=data;

// })
    })
    
  }
  displayStyle = "none";
  
  openPopup(item:any) {
   // console.log(item);
    this.exactDetail=item;
    this.displayStyle = "block";
    
    //console.log(this.exactArticle)
    console.log(this.exactDetail)
    
     
    
    //if(this.exactDetail===this.article){
     // console.log(this.exactArticle)
     //console.log(this.exactDetail.id)

     this.commonserv.getArticle().subscribe((data:any)=>{
       data.forEach(element => {
       //  console.log(element.uid)
         if(this.exactDetail==element.uid){
          console.log(element.t)
          this.article=element.t;
        }
 
       });
      
      // console.log(data);
    
     //this.exactArticle=data;
    
    // console.log(this.exactArticle)
     })
     //console.log(this.article.t)
   // }
  
    // if(this.exactArticle){
    //   console.log(this.article)
    // }
    // // if(this.exactArticle===this.article.uid){
  // this.article= item;
 //console.log(this.article.t);
   // }
  //  }
  //  openArticle(item:any) {
  //   // console.log(item);
  //    this.exactArticle=item;
  //    this.displayStyle = "block";
     
  //   ///   if(this.exactDetail.id===this.exactArticle.uid){
  //  // this.article= item;
  // console.log(this.exactArticle);
  //  //   }
    }
 

  closePopup() {
    this.displayStyle = "none";
  }
  viewDetails(data:any){
    this.Details=data;

  }
  viewDiscription(da:any){
    console.log(da)

 // var getTheId = localStorage.getItem('id');
   //const id=localStorage.getItem('id');
  // console.log('getTheId: ', JSON.parse(getTheId));
    
          // let DatatoPass={ "title":[
          //   {
          //   t:data.title,
          //   discription:data.discription,
          //  }, ]

          //  }
          
         

    
}
   
  



  

}
