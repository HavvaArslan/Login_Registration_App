import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isShowReg = true;
  content:string; //kayıt işemine göre kullanıcıya dönecek yanıt
  constructor(private http:HttpClient,private router: Router) { }

  controlSuccess:number;
  ngOnInit() {
  }
  sendValues(email,password){
    if(email!="" && password!=""){
      console.log(email+" "+password);
      
      var obj={
        email:email,
        password: password,
      }

      this.http.post("http://localhost/User_Login_Registration/api/user/CreateUser", obj).subscribe((data) => {
      if(data["Status"]=="Success"){
        //Kayıt işlemi başarı ile gerçekleşirse login ekranına yönlendir
        this.router.navigate(['/login']);
      }
      else  {
        this.controlSuccess=0;
      }
      this.isShowReg = false;
      console.log(data["Message"]);
      console.log(data["Status"]);
      this.content=data["Message"];
      });
    }
    else{
      alert("e-mail and password fields are required.");
    }
  }
}
