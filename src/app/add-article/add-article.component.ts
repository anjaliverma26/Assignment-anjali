import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/common.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
articles:any=[]
  users:any=[];
  signUpForm :any= FormGroup;
  
  getTheId:any;
  constructor(private fb:FormBuilder,private router:Router,private commonserv:CommonService) { }

  ngOnInit(): void {this.signUpForm = this.fb.group({
    t: [''],
    discription: ['']
  
  
  
    })
    this.commonserv.getUser().subscribe((data:any)=>{
      this.users=data;
      
      
    })
    this.commonserv.getArticle().subscribe((data:any)=>{
      this.articles=data;
      
    })
    

    
  }
  
  onSubmit(data:any){
    console.log(data);
    localStorage.setItem('tid',data.id)
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
            uid:getTheId,
            t:data.title,
            discription:data.discription,
           

           }
         
           this.commonserv.addArticle(DatatoPass).subscribe((data:any)=>{
                
          console.log(data);
                
        
              })

        //    this.commonserv.addUser(DatatoPass).subscribe((data:any)=>{
        //     console.log(data);
            
    
        //  })
    
          
        
    
    }
       
  logout(){
    localStorage.clear();
    this.router.navigate(['home']);

  }
      }


