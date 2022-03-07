import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { CommonService } from 'src/common.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
userList:any=[];
  constructor(private commonserv:CommonService) { }

  ngOnInit(): void {
     this.commonserv.getUser().subscribe((data:any)=>{
        this.userList=data;
//         this.userList?.forEach(article=> {
           
// const propOwn = Object.getOwnPropertyNames(article.title.length)
// console.log(propOwn);
 //console.log(this.userList.length);


          
          
        //});

     })
  }

}
