import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

//ES6 Module, Angular Module
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, HomeComponent],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}