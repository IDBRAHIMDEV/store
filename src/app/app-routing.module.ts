import { AuthGuard } from './guards/auth.guard';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: '/products', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: "products", component: ProductListComponent, canActivate: [AuthGuard] },
  { path: "products/add", component: ProductAddComponent, canActivate: [AuthGuard] },
  { path: "products/edit/:id", component: ProductEditComponent, canActivate: [AuthGuard] },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
