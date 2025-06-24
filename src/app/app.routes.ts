import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecipeCategoryComponent } from './recipes/recipe-category/recipe-category.component';

export const routes: Routes = [
    {path:'',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:RecipeListComponent},
    {path:'category/:type',component:RecipeCategoryComponent}
];
 