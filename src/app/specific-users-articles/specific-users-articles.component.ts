import { Component, OnInit,Input } from '@angular/core';
import { CommonService } from 'src/common.service';

@Component({
  selector: 'app-specific-users-articles',
  templateUrl: './specific-users-articles.component.html',
  styleUrls: ['./specific-users-articles.component.css']
})
export class SpecificUsersArticlesComponent implements OnInit {
   @Input() id:any;

  constructor(private commonserv:CommonService) { }

  ngOnInit(): void {
    this.commonserv.getUser().subscribe((data:any)=>{
    
      console.log(this.id);

  })}
  
}
 
  


