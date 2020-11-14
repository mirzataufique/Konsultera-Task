import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DynamicFormComponent} from './Layout/dynamic-form/dynamic-form.component';
import {DataTableComponent} from './Layout/data-table/data-table.component';
import { YoutubePlayerComponent }from './Layout/youtube-player/youtube-player.component'

const routes: Routes = [
  {path:'form',component:DynamicFormComponent},
  {path:'datatable',component:DataTableComponent},
  {path:'vplayer',component:YoutubePlayerComponent},
  {path:'',redirectTo:"/form", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[DynamicFormComponent,DataTableComponent,YoutubePlayerComponent];
