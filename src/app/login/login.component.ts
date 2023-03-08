import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ConnexionserviceService } from '../service/connexionservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any
  msg: any
  connexionnew: any;

  constructor(private http: HttpClient,private route: Router,private  connexionservice: ConnexionserviceService) { }
  ngOnInit(): void {
    var test = JSON.parse(localStorage.getItem('userConnect') || '{}');
    console.log('test.role:', test.role);
    console.log('this.connexionservice.isConnected():', this.connexionservice.isConnected());
    
    if (this.connexionservice.isConnected()) {
      if (test.role == 'Admin') {
        this.route.navigateByUrl('home');
      } else if (test.role == 'Condidat') {
        this.route.navigateByUrl('home');
      }
    } else {
      this.route.navigateByUrl('login');
    }
    
  }

  connexion(val: any): any {
    this.http.post('http://localhost:8082/connexion', val).subscribe({
      next: (data) => {
        this.user = data;
        if (this.user != null ) {
          if(this.user.role=='Admin' )
          {this.connexionservice.setUserSession(this.user);
          this.route.navigateByUrl('home');
          }
          if(this.user.role=='Condidat' && this.user.valider == true )
          {this.connexionservice.setUserSession(this.user);
          this.route.navigateByUrl('home');
          }
          if(this.user.role=='Condidat' && this.user.valider == false )
          {
            Swal.fire({
              text: 'Votre demande est en cours de traitement',
              icon: 'warning'
            }); 
          }
  
        } else { this.msg = 'Identifiants incorrectes !! '; 
        console.log('identifiants incorrectes ! ')}
      }, error: (err) => { console.log(err) }
    })
  }
  


  

}
