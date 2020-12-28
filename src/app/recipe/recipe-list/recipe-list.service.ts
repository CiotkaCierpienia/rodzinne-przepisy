import { Injectable } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable} from 'rxjs';
import {RecipeList, ContentRecipeService, SearchAPIService, SearchResponse} from 'flotiq';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {

  constructor(
    private transferState: TransferStateService,
    private flotiqService: ContentRecipeService,
    private searchService: SearchAPIService,
  ) { }

  getRecipes(page, ): Observable<RecipeList> {
    return this.transferState.useScullyTransferState(
      'recipes' + page,
      this.flotiqService.listRecipe(page, 9, 'internal.createdAt', 'desc', 1)
    );
  }

  getSearch(page, search): Observable<SearchResponse> {
    return this.searchService.search(search, ['name^3', 'description'], page, '9', 'internal.createdAt', 'desc', ['recipe']);
  }
}
