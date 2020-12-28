import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SingleRecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CategoryRecipeListComponent } from './category-recipe-list/category-recipe-list.component';
import {AuthGuard} from "../login/auth.guard";

const routes = [
  { path: '', component: RecipeListComponent, canActivate: [AuthGuard] },
  { path: ':page', component: RecipeListComponent, canActivate: [AuthGuard] },
  { path: 'recipe/:slug', component: SingleRecipeComponent, canActivate: [AuthGuard] },
  { path: 'category/:slug', component: CategoryRecipeListComponent, canActivate: [AuthGuard] },
  { path: 'category/:slug/:page', component: CategoryRecipeListComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {}
