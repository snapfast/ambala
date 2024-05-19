import { Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { PaygateComponent } from './paygate/paygate.component';

export const routes: Routes = [
    { path: '', component: AppointmentComponent },
    { path: 'paygate', component: PaygateComponent },
];
