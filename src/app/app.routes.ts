import { Routes } from '@angular/router';
import { AddHotelComponent } from './components/hotel/add-hotel/add-hotel.component';
import { ListHotelComponent } from './components/hotel/list-hotel/list-hotel.component';
import { AddGuestComponent } from './components/guest/add-guest/add-guest.component';
import { ListGuestComponent } from './components/guest/list-guest/list-guest.component';
import { AddRoomComponent } from './components/room/add-room/add-room.component';
import { ListRoomComponent } from './components/room/list-room/list-room.component';

export const routes: Routes = [
{path:'',redirectTo: '/list-hotels', pathMatch:'full'},
{path:'add-hotel',component:AddHotelComponent},
{path:'list-hotels',component:ListHotelComponent},
{path:'add-guest',component:AddGuestComponent},
{path:'list-guests',component:ListGuestComponent},
{path:'add-room',component:AddRoomComponent},
{path:'list-rooms',component:ListRoomComponent},
];
