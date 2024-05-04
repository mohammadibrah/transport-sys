import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-truck-dialog',
  templateUrl: './truck-dialog.component.html',
  styleUrls: ['./truck-dialog.component.css']
})
export class TruckDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TruckDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSaveClick(): void {
    this.dialogRef.close(this.data);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
