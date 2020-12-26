import { Component, OnInit } from '@angular/core';
import { Recipe, Category} from 'flotiq';
import { ActivatedRoute, Params} from '@angular/router';
import { CategoryRecipeListService } from './category-recipe-list.service';
import { CategoryService } from './category.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-category-recipe-list',
  templateUrl: './category-recipe-list.component.html'
})
export class CategoryRecipeListComponent implements OnInit {

  recipes: Recipe[];
  totalPages: number;
  page: number;
  category: Category;

  constructor(
    private imageService: ImageService,
    private activatedRoute: ActivatedRoute,
    private recipeListService: CategoryRecipeListService,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.page = +params.page || 1;
      this.categoryService.getCategory(params.slug).subscribe((categories) => {
        this.category = categories.data[0];
        this.recipeListService.getRecipes(this.category.id,this.page).subscribe((recipes) => {
          if (recipes) {
            this.recipes = recipes.data;
            this.totalPages = recipes.total_pages;
            this.page = recipes.current_page;
          }
        });
      })

    });
  }

}
