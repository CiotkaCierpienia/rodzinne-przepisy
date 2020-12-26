import { Injectable } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable} from 'rxjs';
import { RecipeList, ContentRecipeService } from 'flotiq';

@Injectable({
  providedIn: 'root'
})
export class CategoryRecipeListService {

  constructor(
    private transferState: TransferStateService,
    private flotiqService: ContentRecipeService
  ) { }

  getRecipes(categoryId, page): Observable<RecipeList> {
    return this.transferState.useScullyTransferState(
      'recipes' + categoryId + page,
      this.flotiqService.listRecipe(page, 9, 'name', 'desc', 1, '{"category":{"type":"contains","filter":"/api/v1/content/category/'+categoryId+'"}}')
    );
  }
}
