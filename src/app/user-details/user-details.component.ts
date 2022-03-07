import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/common.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  


  users:any=[];
  signUpForm :any= FormGroup;
  
  getTheId:any;
  constructor(private fb:FormBuilder,private router:Router,private commonserv:CommonService) { }

  ngOnInit(): void {this.signUpForm = this.fb.group({
    name: [''],
    email: [''],
    password:['']
    
  
  
    })
    this.commonserv.getUser().subscribe((data:any)=>{
      this.users=data;
      
      
    })
    

    
  }
   
  
    
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  
  onSubmit(data:any){
    console.log(data);
    var getTheId = localStorage.getItem('id');
   //const id=localStorage.getItem('id');
   console.log('getTheId: ', JSON.parse(getTheId));
    
          // let DatatoPass={ "title":[
          //   {
          //   t:data.title,
          //   discription:data.discription,
          //  }, ]

          //  }
          let DatatoPass={
            id:getTheId,
            name:data.name,
            email:data.email,
            password:data.password
           

           }
         
           this.commonserv.updateUser(DatatoPass,DatatoPass.id).subscribe((data:any)=>{
                
          console.log(data);
                
        
              })
              

        //    this.commonserv.addUser(DatatoPass).subscribe((data:any)=>{
        //     console.log(data);
            
    
        //  })
    
          
        
    
    }
  }
   
    
  
  
  
      
      
   


