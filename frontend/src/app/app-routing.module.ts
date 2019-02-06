import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { CountriesComponent } from "./countries/countries.component";
import { FirstpageComponent } from "./firstpage/firstpage.component";
import { EditComponent } from "./edit/edit.component";

const appRoutes: Routes = [
    { path: 'welcome', component: FirstpageComponent },
    { path: 'listing', component: CountriesComponent },
    { path: 'create', component: CreateComponent },
    { path: 'edit', component: EditComponent },
    { path: '**', redirectTo: '/welcome' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}