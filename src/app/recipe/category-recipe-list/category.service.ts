import { Injectable } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable} from 'rxjs';
import { CategoryList, ContentCategoryService } from 'flotiq';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private transferState: TransferStateService,
    private flotiqService: ContentCategoryService
  ) { }

  getCategory(slug): Observable<CategoryList> {
    return this.transferState.useScullyTransferState(
      'category-' + slug,
      this.flotiqService.listCategory(
        1,
        1,
        'id',
        'asc',
        1,
        '{"slug":{"type":"equals","filter":"' + slug + '"}}'
      )
    );
  }
}
