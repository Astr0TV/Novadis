import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionserviceService } from '../service/connexionservice.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;

     ngOnInit(): void {

      this.http.get('http://localhost:8082/alluser').subscribe({
        next: (data) => { this.user = data; 
          console.log('this msg concernec les informations de'); 
          console.log(data) },
        error: (err) => 
        {console.log(err); }
      });
  
     }

     

     constructor(private route:Router,private connexionservice:ConnexionserviceService,private http: HttpClient) { }

     /**Cette API permet la deconnexion  de l'utilisateur en cours*/
     goToPage(pageName:string ): void{
      this.route.navigate([`login`]);
      localStorage.clear();
    } 

    showMessage() {
      Swal.fire({
        text: 'La Status a ete modifié !',
        icon: 'success'
      });
    }

    updatestatus(updatestatus: any){
      this.connexionservice.updatestatus = updatestatus;
      var information= 
       {
         "nom": updatestatus.nom,
         "prenom": updatestatus.prenom,
         "email": updatestatus.email,
         "mdp": updatestatus.mdp,
         "valider": true,
         "role": updatestatus.role,
       };
      let headers = new HttpHeaders();
      headers = headers.set('content-type','application/json');
      console.log(updatestatus.nom)
        this.http.put('http://localhost:8082/user/'+ updatestatus.id ,JSON.stringify(information),{headers: headers}).subscribe({
         next:(data)=>{
           console.log(data)
           this.ngOnInit();
         },
         error:(err)=>{console.log(err);}
         });
   
   
     }
   }
