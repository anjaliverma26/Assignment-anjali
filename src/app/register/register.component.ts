import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,NgForm,FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from 'src/common.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpForm :any= FormGroup;
  //id:any;
  users:any=[]
  constructor(private fb:FormBuilder,private router:Router,private commonserv:CommonService) { }
  ngOnInit(){
    this.signUpForm = this.fb.group({
      name: ['',[
        Validators.required,
        Validators.pattern('^[a-zA-Z \-\']+'),
        Validators.maxLength(50),
      
      ]
],
      email: ['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required]
    
    
    });
    
    
  }
  
  onSubmit(data:any){
    console.log(data);
  
     let DataToPass={

  name:data.name,
  email:data.email,
  password:data.password,


  
  
  id:0
     }
    
this.commonserv.getUser().subscribe((data)=>    {   
     this.users = data;  
  console.log(data)  
     let check = this.users.find((p: any) => p.email === DataToPass.email); 
  console.log(check)
       if(!check){     
       DataToPass.id = this.users[this.users.length - 1].id;    
        DataToPass.id++;    
        this.commonserv.addUser(DataToPass).subscribe((data:any)=>{
console.log(data)
alert('registered successfully')
     
    })
  }
})
}
  goTologin(){
    this.router.navigate(['login']);
  }


  

}


