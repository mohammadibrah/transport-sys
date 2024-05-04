import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TruckDialogComponent } from '../truck-dialog/truck-dialog.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTrucks().subscribe(trucks => {
      console.log('Trucks:', trucks);
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(TruckDialogComponent, {
      // width: '400px',
      data: { title: 'Add Truck', truckModel: '', truckYear: null, tuvLastDate: null, tuvNextDate: null, kmCounter: null }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Add your logic to handle the result (added truck details)
    });
  }

  openEditDialog(truckDetails: any): void {
    const dialogRef = this.dialog.open(TruckDialogComponent, {
      // width: '400px',
      data: { title: 'Edit Truck', ...truckDetails }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Add your logic to handle the result (edited truck details)
    });
  }

}
