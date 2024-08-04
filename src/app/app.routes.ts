import { Routes } from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';
import { MainComponent } from './main/main.component';
import { PaygateComponent } from './paygate/paygate.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'mobile', component: MobileComponent },
];
