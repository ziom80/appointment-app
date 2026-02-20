import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  
 newAppointmentTitle:string = "";
 newAppointmentDate: Date = new Date();

 ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []

  }
 
 appointments: Appointment[] = []

 addAppointment() {
  if(this.newAppointmentTitle.trim().length && this.newAppointmentDate)
  {
    let newAppointment: Appointment = {
      id: Date.now(),
      title: this.newAppointmentTitle,
      date: this.newAppointmentDate
    }

    this.appointments.push(newAppointment)

    this.newAppointmentTitle = " ";
    this.newAppointmentDate = new Date(); 

    alert(this.appointments.length)
  }
}
  deleteAppointment(index: number)
  {
    this.appointments.splice(index,1)
  }

}
