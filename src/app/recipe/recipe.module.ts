import { NgModule } from '@angular/core';
import { RecipeComponent } from './recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SingleRecipeComponent } from './recipe/recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { CategoryRecipeListComponent } from './category-recipe-list/category-recipe-list.component';

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    SingleRecipeComponent,
    CategoryRecipeListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RecipeComponent,
    RecipeRoutingModule,
    RecipeListComponent,
    CategoryRecipeListComponent
  ]
})
export class RecipeModule {}
