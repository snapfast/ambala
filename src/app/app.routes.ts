import { Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { MainComponent } from './appointment/main.component';
import { PaygateComponent } from './paygate/paygate.component';

export const routes: Routes = [
    { path: '', component: AppointmentComponent },
    { path: 'main', component: MainComponent },
    { path: 'paygate', component: PaygateComponent },
];
