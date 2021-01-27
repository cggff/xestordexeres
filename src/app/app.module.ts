import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { taskReducer } from './entities/task/reducers/task.reducer';
import { TaskEffects } from './entities/task/effects/task.effects';

import { DashboardPageComponent } from './pages/dashboard/dashboard-page.component';
import { EditPageComponent } from './pages/edit/edit-page.component';
import { TaskDetailComponent } from './entities/task/components/detail/task-detail.component';
import { SearchComponent } from './components/search/search.component';
import { TaskListComponent } from './entities/task/components/list/task-list.component';
import { TaskEditComponent } from './entities/task/components/edit/task-edit.component';
import { TaskDeleteDialogComponent } from 'src/app/entities/task/components/delete/task-delete-dialog.component'

import { OderbyStatusPipe } from 'src/app/pipe/order.pipe';
import { HighlightPipe } from 'src/app/pipe/highlight.pipe';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatSliderModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatDialogModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSlideToggleModule,

    BrowserAnimationsModule,
    StoreModule.forRoot({
      tasks: taskReducer
    }),
    EffectsModule.forRoot([
      TaskEffects
    ]),

    // Fake service
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  entryComponents: [
    MatDialogModule,
    TaskDeleteDialogComponent
  ],
  declarations: [
    AppComponent,
    DashboardPageComponent,
    TaskDetailComponent,
    SearchComponent,
    TaskDeleteDialogComponent,
    TaskListComponent,
    TaskEditComponent,
    EditPageComponent,
    OderbyStatusPipe,
    HighlightPipe
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule { }
