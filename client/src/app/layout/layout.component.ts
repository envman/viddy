import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@etech/shared'
import { MatDialog, MatDialogRef } from '@angular/material';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component'

@Component({
  selector: 'etech-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  navOpen = 'true'
  uploadDialogRef: MatDialogRef<UploadDialogComponent>;
  userProfile

  constructor(private authService: AuthenticationService, private dialog: MatDialog) {}

  ngOnInit(){
    this.getProfile()
  }

  toggleSidenav() {
    this.navOpen = this.navOpen === 'true' ? 'false' : 'true'
  }

  logout() {
    this.authService.logout()
  }

  uploadFileDialog() {
    this.uploadDialogRef = this.dialog.open(UploadDialogComponent)
  }

  getProfile() {
    this.authService.getProfile((err, result) => {
      console.log(result)
      this.userProfile = result
    })
  }
}
