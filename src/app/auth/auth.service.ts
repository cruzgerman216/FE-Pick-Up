import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService { 

    constructor(private http: HttpClient, private router: Router) { }

    onUserLogin(user: any) {
        this.http.post('https://pick-up-sports-api.herokuapp.com/api/v1/users/login', user.userData,)
        .subscribe((responseData) => {
          console.log(responseData);
          this.router.navigate(['/home'])
          localStorage.setItem('currentUser', JSON.stringify(responseData))
        });
      }

      onUserLogout() {
        let auth_token = "c6cde62c33d319e02cd87f30d5d175e49da738b1"
        this.http.delete('https://pick-up-sports-api.herokuapp.com/api/v1/users/logout', { headers: new HttpHeaders({
          'Authorization': `Bearer ${auth_token}`
        })})
        .subscribe((res: any) => {
          console.log(res)
        });
        localStorage.removeItem("currentUser") 
      }
}