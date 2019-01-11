import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import {SideNavbarComponent} from './Components/side-navbar/side-navbar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MainComponent } from './Components/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule,MatDialogModule,MatSelectModule,
   MatDatepickerModule,MatNativeDateModule,MatSidenavModule,MatToolbarModule,MatListModule,MatTableModule,MatMenuModule,
   MatTabsModule, MatChipsModule } from '@angular/material';
import { RouterModule,  } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MeetingViewComponent } from './Components/meeting-view/meeting-view.component';
import { FormsModule } from '@angular/forms';
import { CreatedMeetingsComponent } from './Components/created-meetings/created-meetings.component';
import { InvitedMeetingsComponent } from './Components/invited-meetings/invited-meetings.component';
import { HttpClientModule } from '@angular/common/http';
import { MeetingDetailsService } from './meeting-details.service';
import { DeleteDialogComponent } from './Components/delete-dialog/delete-dialog.component';
import { LoginHeaderComponent } from './Components/login-header/login-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SideNavbarComponent,
    DashboardComponent,
    MainComponent,
    MeetingViewComponent,
    CreatedMeetingsComponent,
    InvitedMeetingsComponent,
    DeleteDialogComponent,
    LoginHeaderComponent,
  
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    RouterModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,  MatListModule,MatSelectModule,MatMenuModule,
    NgxDatatableModule,MatDatepickerModule,MatNativeDateModule,
    MatTableModule,MatFormFieldModule,
    MatTabsModule, MatDialogModule ,MatInputModule,MatChipsModule,
    HttpClientModule,
  ],
  providers: [ MatDatepickerModule,MeetingDetailsService],
  bootstrap: [AppComponent],
  entryComponents:[MeetingViewComponent,DeleteDialogComponent]
})
export class AppModule { }
