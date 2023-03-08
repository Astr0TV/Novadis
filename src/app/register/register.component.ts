import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

  constructor(private http:HttpClient,private route: Router) { }

  ngOnInit(): void {
    
  }

  createUser(nom:any,prenom:any,email:any,mdp:any){
    var newcandidat =  {
      "nom": nom,
      "prenom": prenom,
      "email": email,
      "mdp": mdp,
      "role": "Condidat",
      "valider": false
    };

    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');

    this.http.post('http://localhost:8082/user', JSON.stringify(newcandidat), { headers: headers })
    .subscribe({
      next:(data)=>{
        this.route.navigateByUrl('login');
      },
      error:(err)=>{console.log(err);}
      })
    
      }

}
