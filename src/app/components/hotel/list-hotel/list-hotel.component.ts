import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../classes/hotel';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-hotel',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './list-hotel.component.html',
  styleUrl: './list-hotel.component.css'
})
export class ListHotelComponent implements OnInit{
constructor(private http:HttpClient, private router:Router){}
hotels:Hotel[]=[];
getHotels(){
this.http.get<Hotel[]>('http://localhost:9995/hotels/all').subscribe(
  (data: Hotel[]) => {this.hotels = data
    console.log(this.hotels)
  });
}
updateHotel(hotel:Hotel){
  this.http.put('http://localhost:9995/hotels/update',hotel).subscribe(
    {
    //  console.log('update')
    });
}
removeHotel(id:number){
  this.http.delete('http://localhost:9995/hotels/delete/'+id).subscribe(
    {
    //  console.log('update')
    });
}

addHotel(){
  this.router.navigate(['/add-hotel'])
}
ngOnInit(){
  this.getHotels();
}

}
