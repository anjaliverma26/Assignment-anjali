import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AadminComponent } from "./aadmin/aadmin.component";
import { AarticleComponent } from "./aarticle/aarticle.component";
import { AddArticleComponent } from "./add-article/add-article.component";
import { ArticleComponent } from "./article/article.component";
import { AuthGuard } from "./auth.guard";
import { DiscriptionComponent } from "./discription/discription.component";
import { FirstComponent } from "./first/first.component";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { RegisterComponent } from "./register/register.component";
import { SpecificUserProfileComponent } from "./specific-user-profile/specific-user-profile.component";
import { SpecificUsersArticlesComponent } from "./specific-users-articles/specific-users-articles.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ViewUsersComponent } from "./view-users/view-users.component";

const route:Routes=[
    {
        path:'',redirectTo:'home',pathMatch:'full'
    },
    {
     path:'login',component:LoginComponent
    },
    {path:'register',component:RegisterComponent},
    {path:'first',component:FirstComponent,canActivate:[AuthGuard]},
    {path:'home',component:HomeComponent},
    {
     path:'discription',component:DiscriptionComponent
    },
    {
        path:'navigation',component:NavigationComponent
    },{
        path:'specific-user-profile',component:SpecificUserProfileComponent
    },{
        path:'specific-users-article',component:SpecificUsersArticlesComponent
    },{
        path:'view-users',component:ViewUsersComponent
    },{
        path:'user-details',component:UserDetailsComponent
    },{
        path :'add-article',component:AddArticleComponent
    },{
        path:'user-details',component:UserDetailsComponent
    },{
        path:'user-profile',component:UserProfileComponent
    },
    {
        path:'article',component:ArticleComponent    },
        {
            path:'admin',component:AadminComponent
        },
{path:'aarticle',component:AarticleComponent}

];
@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})
 export class AppRoutingModule{

 }