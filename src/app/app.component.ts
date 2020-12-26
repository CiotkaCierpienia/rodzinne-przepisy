import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {CategoryListService} from "./recipe/category-list.service";
import {Category} from "../../flotiq";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isHome = false;
  categories: Category[] = [];

  constructor(private location: Location,
              private categoryListService: CategoryListService,
  ) {
  }

  ngOnInit() {
    if (!this.location.path()) {
      this.isHome = true;
    }
    this.categoryListService.getCategories().subscribe(categories => {
      console.log(categories);
      this.categories = categories.data;
    })
  }
}
