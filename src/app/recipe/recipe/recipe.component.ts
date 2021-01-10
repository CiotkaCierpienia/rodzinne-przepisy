import { Component, OnInit } from '@angular/core';
import { ContentRecipeService, Recipe, Media } from 'flotiq';
import { ActivatedRoute, Params} from '@angular/router';
import { RecipeService} from './recipe.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-recipe-post',
  templateUrl: './recipe.component.html'
})
export class SingleRecipeComponent implements OnInit {

  recipe: Recipe;
  slug: string;
  image: Media;
  stepsImages: Media[] = [];
  getTranslation;

  constructor(
    private flotiqService: ContentRecipeService,
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService,
    private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.slug = params.slug;
      this.recipeService.getRecipe(this.slug).subscribe((recipe) => {
        if (recipe) {
          this.recipe = recipe.data[0];
        }
      });
    });

    this.getTranslation = (trans, amount) => {
      switch(trans) {
        case 'łyżki':
          return (amount < 1 || Math.floor(amount) < amount) || (amount%10 > 1 && amount%10 < 5 && !(amount > 10 || amount < 20))
            ? 'łyżki' : (amount === 1 ? 'łyżka' : 'łyżek');
        case 'łyżeczki':
          return (amount < 1 || Math.floor(amount) < amount) || (amount%10 > 1 && amount%10 < 5 && !(amount > 10 || amount < 20))
            ? 'łyżeczki' : (amount === 1 ? 'łyżeczka' : 'łyżeczek');
        case 'szklanki':
          return (amount < 1 || Math.floor(amount) < amount) || (amount%10 > 1 && amount%10 < 5 && !(amount > 10 || amount < 20))
            ? 'szklanki' : (amount === 1 ? 'szklanka' : 'szklanek');
        case 'opakowanie':
          return (amount < 1 || Math.floor(amount) < amount) || (amount%10 > 1 && amount%10 < 5 && !(amount > 10 || amount < 20))
            ? 'opakowania' : (amount === 1 ? 'opakowanie' : 'opakowań');
        default:
          return trans;
      }
    }
  }

}
