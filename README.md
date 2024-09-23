### ng container ###
One workaround would be to separate the bindings as below:

```
div *ngIf="details"
  <div *ngFor="let info of details">
    {{ info.content }}
  </div>
</div>
```

Or we can use <ng-container></ng-container> without adding any extra element to the DOM at runtime:

```
<ng-container *ngIf="details">
  <div *ngFor="let info of details">
    {{ info.content }}
  </div>
</ng-container>
```

### ng template ###
```
<div DIRECTIVE>
  <app-all-products [allProducts]="products" (reloadProducts)="search()"></app-all-products>
</div>
```

Et pour eviter le div qui va modifier le DOM

```
<ng-template DIRECTIVE>
  <app-all-products [allProducts]="products" (reloadProducts)="search()"></app-all-products>
</ng-template>
```

### ng container et ng template ###
```
<ng-container ngbNavItem *ngFor="let products of productsList; let i = index">
  <a ngbNavLink>Products {{ i + 1 }}</a>
  <ng-template ngbNavContent>
    <app-all-products [allProducts]="products" (reloadProducts)="search()"></app-all-products>
  </ng-template>
</ng-container>
```

### ngb ###
https://ng-bootstrap.github.io/#/home
ng add @ng-bootstrap/ng-bootstrap
https://ng-bootstrap.github.io/#/components/nav/examples


https://getbootstrap.com/docs/5.0/components/card/


