import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isShowLog = true;
  content:string;
 
  constructor(private http:HttpClient){

  }
  ngOnInit() {
  }
  sendValues(email,password){
    if(email!="" && password!=""){
      console.log(email+" "+password);
      
      var obj={
        email:email,
        password: password,
      }

      this.http.post("http://localhost/User_Login_Registration/api/user/Login", obj).subscribe((data) => {

      console.log(data["Status"]);
      console.log(data["Message"]);
      this.isShowLog = false;
      this.content=data["Message"];
      });
    }
    else{
      alert("e-mail and password fields are required.");
    }
  }
}
