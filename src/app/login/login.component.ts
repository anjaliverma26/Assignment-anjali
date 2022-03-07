import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any=FormGroup;
  users:any=[];
  id:any;

  constructor(private fb:FormBuilder,private router:Router,private commonserv:CommonService) { }

  ngOnInit(): void {
this.login=this.fb.group({
  password:['',Validators.required],
  email:['',Validators.compose([Validators.required,Validators.email])]
})
this.commonserv.getUser().subscribe((data:any)=>{
  this.users=data;
  
})
  }
loginSubmit(data:any){
console.log(data);
if (data.email==="admin@gmail.com" && data.password==="admin"){
 //localStorage.setItem("isLoggedIn","true");
 var id=data.id
 localStorage.setItem('id', JSON.stringify(data.id));
    //console.log(item.id)
    var getTheId = localStorage.getItem('id')
  this.router.navigate(['admin'])
}
else if(data.email){
  this.users.forEach((item:any)=> {
  
   if(item.email === data.email && item.password ===data.password){
    //localStorage.setItem("isLoggedIn","true");
    var id=item.id
    localStorage.setItem('id', JSON.stringify(id));
    //console.log(item.id)
    var getTheId = localStorage.getItem('id');
//you can use JSON.parse() if you need to print it
console.log('getTheId: ', JSON.parse(getTheId));

    
    
    this.router.navigate(["add-article"]);
    }
    else{
     // localStorage.clear();
    }
  });
}
}
goToSignUp(){
  this.router.navigate(['register']);
}
}
