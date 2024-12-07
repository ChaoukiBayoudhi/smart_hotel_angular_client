import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../classes/hotel';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UpdateHotelComponent } from '../update-hotel/update-hotel.component';

@Component({
  selector: 'app-list-hotel',
  standalone: true,
  imports: [HttpClientModule, MatDialogModule],
  templateUrl: './list-hotel.component.html',
  styleUrl: './list-hotel.component.css'
})
export class ListHotelComponent implements OnInit {
  constructor(
    private http: HttpClient, 
    private router: Router,
    private dialog: MatDialog
  ) {}

  hotels: Hotel[] = [];

  getHotels() {
    this.http.get<Hotel[]>('http://localhost:9995/hotels/all').subscribe(
      (data: Hotel[]) => {
        this.hotels = data.map(hotel => new Hotel(
          hotel.name,
          hotel.address,
          hotel.rating,
          hotel.id
        ));
      });
  }

  updateHotel(hotel: Hotel) {
    const dialogRef = this.dialog.open(UpdateHotelComponent, {
      width: '500px',
      data: {...hotel} // Send a copy of the hotel
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getHotels(); // Refresh the list
      }
    });
  }

  removeHotel(id: number) {
    this.http.delete('http://localhost:9995/hotels/delete/' + id,{responseType: 'text'}).subscribe({
      next: () => {
        this.getHotels(); // Refresh the list after deletion
      },
      error: (error) => {
        console.error('Error deleting hotel:', error);
      }
    });
  }

  addHotel() {
    this.router.navigate(['/add-hotel']);
  }

  ngOnInit() {
    this.getHotels();
  }
}
