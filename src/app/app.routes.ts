import { Routes } from '@angular/router';
import { SorteioComponent } from './sorteio/sorteio/sorteio.component';
import { MensalistasComponent } from './mensalistas/mensalistas.component';

export const routes: Routes = [
    {path: '', component: SorteioComponent},
    {path:'mensalistas',component: MensalistasComponent}
];
