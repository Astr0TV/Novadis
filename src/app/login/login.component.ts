import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionserviceService } from '../service/connexionservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any
  msg: any

  constructor(private http: HttpClient,private route: Router,private  connexionservice: ConnexionserviceService) { }
  ngOnInit(): void {
    
  } 

  connexion(val: any): any {
    this.http.post('http://localhost:8082/connexion', val).subscribe({
      next: (data) => {
        this.user = data;
        if (this.user != null ) {
          if(this.user.role=='Admin')
          {this.connexionservice.setUserSession(this.user);
          this.route.navigateByUrl('home');
          }
  
        } else { this.msg = 'Identifiants incorrectes !! '; 
        console.log('identifiants incorrectes ! ')}
      }, error: (err) => { console.log(err) }
    })
  }
  


  

}
