import { HttpClient } from "@angular/common/http";
import { identifierModuleUrl } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "./environments/environment";

@Injectable({
    providedIn:'root'
})
export class CommonService{
    baseUrl: any= environment.baseURL;
    articleUrl:any=environment.articleURL;
    constructor(private http:HttpClient){
        
    }
    getUser(){
        return this.http.get(this.baseUrl);
    }

    addUser(data:any){
        return this.http.post(this.baseUrl,data);
    }
    // addArticle(data:any,id:any){
    //     return this.http.patch(this.baseUrl+'/'+id,data);

    // }
     updateUser(data:any,id:any){
       return this.http.patch(this.baseUrl+'/'+id,data);

    }
     getArticle(){
        return this.http.get(this.articleUrl);
    }
    addArticle(data:any){
        return this.http.post(this.articleUrl,data);

    }
    updateArticle(data:any,id:any){
        return this.http.put(this.articleUrl+'/'+id,data);
 
     }
     deleteArticle(id:any){
         return this.http.delete(this.articleUrl+'/'+id)

     }
     deleteUser(id:any){
         return this.http.delete(this.baseUrl+'/'+id)
     }
   

}