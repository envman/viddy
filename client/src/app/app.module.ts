import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule, AuthenticationService, AuthenticatedGuard } from '@etech/shared'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component'
import { CallbackComponent } from './callback/callback.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { NumberTruncatePipe } from './shared/pipes/number-truncate.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    LoginComponent,
    VideoPlayerComponent,
    UploadDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    AuthenticatedGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [UploadDialogComponent]
})
export class AppModule { }
