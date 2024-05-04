import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



export interface Truck {
  id: number;
  model: string;
  year: number;
  tuvLastDate: string;
  tuvNextDate: string;
  kmCounter: number;
  // Add more properties as needed
}

const exampleTrucks = [
  {
    id: 1,
    model: 'Mercedes-Benz Actros',
    year: 2020,
    tuvLastDate: '2023-05-12',
    tuvNextDate: '2024-05-12',
    kmCounter: 5000
  },
  {
    id: 2,
    model: 'Volvo FH',
    year: 2019,
    tuvLastDate: '2023-07-20',
    tuvNextDate: '2024-07-20',
    kmCounter: 6000
  },
  {
    id: 3,
    model: 'Scania R Series',
    year: 2021,
    tuvLastDate: '2023-09-15',
    tuvNextDate: '2024-09-15',
    kmCounter: 4500
  },
  {
    id: 4,
    model: 'MAN TGX',
    year: 2018,
    tuvLastDate: '2023-11-30',
    tuvNextDate: '2024-11-30',
    kmCounter: 7000
  },
  {
    id: 5,
    model: 'DAF XF',
    year: 2022,
    tuvLastDate: '2023-08-25',
    tuvNextDate: '2024-08-25',
    kmCounter: 5500
  },
  {
    id: 6,
    model: 'Iveco S-Way',
    year: 2017,
    tuvLastDate: '2023-06-10',
    tuvNextDate: '2024-06-10',
    kmCounter: 8000
  },
  {
    id: 7,
    model: 'Renault Trucks T Range',
    year: 2019,
    tuvLastDate: '2023-03-05',
    tuvNextDate: '2024-03-05',
    kmCounter: 6000
  },
  {
    id: 8,
    model: 'Peterbilt 579',
    year: 2016,
    tuvLastDate: '2023-02-15',
    tuvNextDate: '2024-02-15',
    kmCounter: 9000
  },
  {
    id: 9,
    model: 'Kenworth T680',
    year: 2020,
    tuvLastDate: '2023-10-08',
    tuvNextDate: '2024-10-08',
    kmCounter: 4800
  },
  {
    id: 10,
    model: 'Mack Anthem',
    year: 2018,
    tuvLastDate: '2023-12-20',
    tuvNextDate: '2024-12-20',
    kmCounter: 7500
  },
  // Add more trucks as needed
];

export default exampleTrucks;


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private trucks: Truck[] = []; // Array to hold trucks
  private trucksSubject = new BehaviorSubject<Truck[]>([]); // Subject to emit trucks changes

  constructor() {
    // Initialize trucks with example data
    this.trucks = exampleTrucks;
    this.trucksSubject.next(this.trucks);
  }

  getTrucks() {
    return this.trucksSubject.asObservable(); // Return observable of trucks
  }

  addTruck(truck: Truck) {
    this.trucks.push(truck); // Add truck to array
    this.trucksSubject.next(this.trucks); // Emit changes
  }

  updateTruck(updatedTruck: Truck) {
    const index = this.trucks.findIndex(truck => truck.id === updatedTruck.id);
    if (index !== -1) {
      this.trucks[index] = updatedTruck; // Update truck in array
      this.trucksSubject.next(this.trucks); // Emit changes
    }
  }
}
