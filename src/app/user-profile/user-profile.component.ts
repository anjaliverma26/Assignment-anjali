import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/common.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

 
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
  
  deleteUser(data:any){

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
           
             this.commonserv.deleteUser(DatatoPass.id).subscribe((data:any)=>{
                  
            console.log(data);
                  
          
                })
      
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['home']);

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
                
        alert('profile updated successfully')
              })

        //    this.commonserv.addUser(DatatoPass).subscribe((data:any)=>{
        //     console.log(data);
            
    
        //  })
    
          
        
    
    }
    // update(data:any){
    //   console.log(data);
    //   var getTheId = localStorage.getItem('id');
    //  //const id=localStorage.getItem('id');
    //  console.log('getTheId: ', JSON.parse(getTheId));
      
    //         // let DatatoPass={ "title":[
    //         //   {
    //         //   t:data.title,
    //         //   discription:data.discription,
    //         //  }, ]
  
    //         //  }
    //         let DatatoPass={
    //           id:getTheId,
    //           title:data.title,
    //           discription:data.discription
             
  
    //          }
           
    //          this.commonserv.updateArticle(DatatoPass,DatatoPass.id).subscribe((data:any)=>{
                  
    //         console.log(data);
                  
          
    //             })
                
  
          //    this.commonserv.addUser(DatatoPass).subscribe((data:any)=>{
          //     console.log(data);
              
      
          //  })
      
            
          
      
    
     
    //  }



    
     
      }



