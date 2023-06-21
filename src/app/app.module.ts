import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { FilterByCategoryPipe } from './courses/filter-by-category.pipe';
import { HighlightedDirective } from './directives/highlighted.directive';
import { CourseImageComponent } from './courses/course-image/course-image.component';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    FilterByCategoryPipe,
    HighlightedDirective,
    CourseImageComponent,
    NgxUnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [FilterByCategoryPipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
