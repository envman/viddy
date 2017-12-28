import { Component } from '@angular/core';
import { AuthenticationService } from '@etech/shared'
import { MatDialog, MatDialogRef } from '@angular/material';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component'

@Component({
  selector: 'etech-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  navOpen = 'true'
  uploadDialogRef: MatDialogRef<UploadDialogComponent>;

  constructor(private authService: AuthenticationService, private dialog: MatDialog) {}

  toggleSidenav() {
    this.navOpen = this.navOpen === 'true' ? 'false' : 'true'
  }

  logout() {
    this.authService.logout()
  }

  uploadFileDialog() {
    this.uploadDialogRef = this.dialog.open(UploadDialogComponent)
  }

}

@Component({
  selector: 'dialog-upload',
  templateUrl:

})
