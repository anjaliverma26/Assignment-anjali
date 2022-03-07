import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/common.service';

@Component({
  selector: 'app-discription',
  templateUrl: './discription.component.html',
  styleUrls: ['./discription.component.css']
})
export class DiscriptionComponent implements OnInit {
users:any=[];
  constructor( private commonserv:CommonService,private router:Router) { }

  ngOnInit(): void {
    this.commonserv.getUser().subscribe((data:any)=>{
      this.users=data;
      
   })
  }


}
