import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionserviceService } from '../service/connexionservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
     ngOnInit(): void {
  
     }

     constructor(private route:Router,private connexionservice:ConnexionserviceService,private http: HttpClient) { }

     /**Cette API permet la deconnexion  de l'utilisateur en cours*/
     goToPage(pageName:string ): void{
      this.route.navigate([`login`]);
      localStorage.clear();
    } 
  

}
