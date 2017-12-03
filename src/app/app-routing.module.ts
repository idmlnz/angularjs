import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  exports: [ RouterModule ] // exporting RouterModule makes router directives
                            // available for use in the AppModule components that
                            // will need them 
})
export class AppRoutingModule {}