import { Component, OnInit } from '@angular/core';
import { ContentRecipeService, Recipe, Media, ContentMediaService} from 'flotiq';
import { ActivatedRoute, Params} from '@angular/router';
import { RecipeListService } from './recipe-list.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  totalPages: number;
  page: number;
  search: string;
  images: Media[] = [];

  constructor(
    private flotiqService: ContentRecipeService,
    private imageService: ImageService,
    private activatedRoute: ActivatedRoute,
    private recipeListService: RecipeListService
  ) {
  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.search = queryParams.q || null;
      this.activatedRoute.params.subscribe((params: Params) => {
        this.page = +params.page || 1;
        if(this.search) {
          this.recipeListService.getSearch(this.page, this.search).subscribe((recipes) => {
            if (recipes) {
              this.recipes = recipes.data.map(object => {
                let recipe = JSON.parse(object.item['object_data'])
                if (recipe.image && recipe.image[0]) {
                  this.imageService.getImage(recipe.image[0].dataUrl.split('/')[5]).subscribe((image) => {
                    this.images[recipe.id] = image;
                  });
                }
                return recipe;
                }
              );
            }
          });
        } else {
          this.recipeListService.getRecipes(this.page).subscribe((recipes) => {
            if (recipes) {
              this.recipes = recipes.data;
              this.totalPages = recipes.total_pages;
              this.page = recipes.current_page;
            }
          });
        }
      });
    });
  }

}
