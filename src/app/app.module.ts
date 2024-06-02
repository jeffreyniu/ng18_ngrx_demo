import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShellComponent } from './home/shell.component';
import { MenuComponent } from './home/menu.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found.component';

/* Feature Modules */
import { UserModule } from './user/user.module';

@NgModule({ declarations: [
        AppComponent,
        ShellComponent,
        MenuComponent,
        WelcomeComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule,
      // InMemoryWebApiModule.forRoot(ProductData),
      UserModule,
      AppRoutingModule],
    providers: [
      provideHttpClient(withInterceptorsFromDi()),
      importProvidersFrom(InMemoryWebApiModule.forRoot(ProductData))
    ]
  })
export class AppModule { }
