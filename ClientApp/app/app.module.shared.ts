import { PhotoService } from './services/photo.service';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './app.error-handler';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { VehicleService } from './services/vehicle.service';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list';
import { ViewVehicleComponent } from './components/view-vehicle/view-vehicle';
import { PaginationComponent } from './components/shared/pagination.component';
import { BrowserXhrWithProgress, ProgressService } from './services/progress.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        VehicleFormComponent,
        VehicleListComponent,
        ViewVehicleComponent,
        PaginationComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
            { path: 'vehicles/new', component: VehicleFormComponent, canActivate: [ AuthGuard ] },
            { path: 'vehicles/edit/:id', component: VehicleFormComponent, canActivate: [ AuthGuard ] },
            { path: 'vehicles/:id', component: ViewVehicleComponent },
            { path: 'vehicles', component: VehicleListComponent },
            { path: 'admin', component: AdminComponent, canActivate: [ AdminAuthGuard ] },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        { provide: ErrorHandler, useClass: AppErrorHandler },
        VehicleService,
        PhotoService
    ]
})
export class AppModuleShared {
}
