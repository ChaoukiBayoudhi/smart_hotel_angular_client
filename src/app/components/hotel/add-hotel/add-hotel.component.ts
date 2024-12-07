import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../../../classes/hotel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-hotel',
  standalone: true,
  imports: [HttpClientModule,FormsModule],
  templateUrl: './add-hotel.component.html',
  styleUrl: './add-hotel.component.css'
})
export class AddHotelComponent {
  constructor(private http:HttpClient,private router:Router){}
  hotel!:Hotel;
  addHotel(){
    this.http.post("http://localhost:9995/hotels/add",this.hotel).subscribe();
  }

}
