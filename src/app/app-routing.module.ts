import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageEditorComponent } from './image-editor/image-editor.component';
const routes: Routes = [
  { path: 'heroes', component: ImageEditorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


