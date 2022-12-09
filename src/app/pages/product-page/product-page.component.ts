import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/product.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.sass']
})
export class ProductPageComponent {

  title = 'angular initial';
  loading = false
  products$: Observable<IProduct[]>
  term = ''

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }

}
