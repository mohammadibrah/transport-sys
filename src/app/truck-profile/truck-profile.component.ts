import { Component } from '@angular/core';

@Component({
  selector: 'app-truck-profile',
  templateUrl: './truck-profile.component.html',
  styleUrls: ['./truck-profile.component.css']
})
export class TruckProfileComponent {
goBack() {
  window.history.back();
}

}
