import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/common.service';

@Component({
  selector: 'app-aarticle',
  templateUrl: './aarticle.component.html',
  styleUrls: ['./aarticle.component.css']
})
export class AarticleComponent implements OnInit {

  articles:any=[];
  signUpForm :any= FormGroup;
  getarticles:any=[]
  getTheId:any;
  constructor(private fb:FormBuilder,private router:Router,private commonserv:CommonService) { }

  ngOnInit(): void {this.signUpForm = this.fb.group({
    t: [''],
    discription: ['']
    
  
  
    })
    this.commonserv.getArticle().subscribe((data:any)=>{
      this.articles=data;
      console.log(this.articles)
      
      
    })
  

    
  } 
 
  
  displayStyle = "none";
  
  openPopup(data:any) {
    console.log(data)
   // console.log(item);
   localStorage.setItem('tid',data.id)
      
  // this.article=data;
   this.displayStyle = "block";
   
   //console.log(this.exactArticle)
  // console.log(this.article)
 // this.title= this.article.t
   //this.discription=this.article.discription
    

  }
  closePopup() {
    this.displayStyle = "none";
  }



  
              

        //    this.commonserv.addUser(DatatoPass).subscribe((data:any)=>{
        //     console.log(data);
            
    
        //  })
    
            
  logout(){
    localStorage.clear();
    this.router.navigate(['home']);

  }
    
        onSubmit(data:any){
  console.log(data)
        //   var getTheId = localStorage.getItem('id');
        //  //const id=localStorage.getItem('id');
          var getThetId=localStorage.getItem('tid')
          console.log('getThetId: ', JSON.parse(getThetId));
       
        //         // let DatatoPass={ "title":[
        //         //   {
        //         //   t:data.title,
        //         //   discription:data.discription,
        //         //  }, ]
      
        //         //  }
        //         console.log('getThetId: ', JSON.parse(getThetId));
                
                let DatatoPass={
                id:getThetId,
                  t:data.t,
                  discription:data.discription,
      
                 
      
                 }
               
                 this.commonserv.updateArticle(DatatoPass, getThetId).subscribe((data:any)=>{
                      
                console.log(data);
                      
              
                    })
      
              //    this.commonserv.addUser(DatatoPass).subscribe((data:any)=>{
              //     console.log(data);
                  
          
              //  })
          
                
                  }
        

  
  
  deleteUser(data:any){

    console.log(data);
      
     //const id=localStorage.getItem('id');
    
      
            // let DatatoPass={ "title":[
            //   {
            //   t:data.title,
            //   discription:data.discription,
            //  }, ]
  
            //
           
             this.commonserv.deleteArticle(data.id).subscribe((data:any)=>{
                  
            console.log(data);
                  
          
                })
      
  }
  
}
