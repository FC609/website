import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { ContentComponent } from './common/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductService} from './services/product.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchPipe } from './pipe/search.pipe';
import { StarsComponent } from './common/stars/stars.component';
import { UpdateComponent } from './pages/update/update.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Products',
    component: ProductsComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    ProductsComponent,
    SearchPipe,
    StarsComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
