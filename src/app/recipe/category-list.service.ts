import {Injectable} from '@angular/core';
import {TransferStateService} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';
import {CategoryList, ContentCategoryService} from 'flotiq';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  constructor(
    private transferState: TransferStateService,
    private flotiqService: ContentCategoryService
  ) {
  }

  getCategories(): Observable<CategoryList> {
    return this.transferState.useScullyTransferState(
      'categories',
      this.flotiqService.listCategory(1, 10000, 'name', 'desc', 1)
    );
  }
}
