import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Console } from 'console';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { CommonService } from 'src/common.service';

@Component({
  selector: 'app-aadmin',
  templateUrl: './aadmin.component.html',
  styleUrls: ['./aadmin.component.css']
})
export class AadminComponent implements OnInit {
  users:any=[];
  signUpForm :any= FormGroup;
   name:any;
   p:number=1;
  
  getTheId:any;
  constructor(private fb:FormBuilder,private router:Router,private commonserv:CommonService) { }

  ngOnInit(): void {this.signUpForm = this.fb.group({
    name: [''],
    email: [''],
    password:['']
    
  
  
    })
    this.commonserv.getUser().subscribe((data:any)=>{
      this.users=data;
      console.log(this.users)
      
      
    })
  
    

    
  }
  search(){
    if(this.name==""){
      this.ngOnInit()
    }else{
      this.users=this.users.filter(res=>{
        console.log(res);
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      
      })
    }
  }
  key:string='id';
  reverse:boolean=false;
  sort(key){
this.key=key;
this.reverse=!this.reverse

  }
   
  
  deleteUser(data:any){

    console.log(data.id);
      
     //const id=localStorage.getItem('id');
    
      
            // let DatatoPass={ "title":[
            //   {
            //   t:data.title,
            //   discription:data.discription,
            //  }, ]
  
            //
           
             this.commonserv.deleteUser(data.id).subscribe((data:any)=>{
                  
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




