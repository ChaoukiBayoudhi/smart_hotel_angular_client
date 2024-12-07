import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Hotel } from '../../../classes/hotel';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-update-hotel',
  standalone: true,
  imports: [FormsModule, MatDialogModule, HttpClientModule],
  templateUrl: './update-hotel.component.html'
})
export class UpdateHotelComponent {
  constructor(
    private dialogRef: MatDialogRef<UpdateHotelComponent>,
    @Inject(MAT_DIALOG_DATA) public hotel: Hotel,
    private http: HttpClient
  ) {}

  onSubmit() {
    this.http.put('http://localhost:9995/hotels/update/'+ this.hotel.id, this.hotel).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (error) => {
        console.error('Error updating hotel:', error);
      }
    });
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}

