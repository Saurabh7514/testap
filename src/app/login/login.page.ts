import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  phone: any;
  errorEmpty = false;
  errorNum = false;
  constructor(private formB: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute,) { }

  public onKeyUp(event: any) {
    this.errorEmpty = false;
    this.errorNum = false;
  }

  formSubmit_login(phone){
    console.log('Phone', phone);
    let regExp = new RegExp('^[0-9]*$');

  if(phone){
    if (regExp.test(phone)) {
      let lastcut = phone.slice(6, 10);
      // console.log(lastcut);
      this.router.navigate(['/otp',{fullnum:phone,lastdigit:lastcut}]);
    }
    else{
      this.errorNum = true;
    }
  }else{
    this.errorEmpty = true;
  }
  //  console.log('Phone Number ', phone);
  //  console.log('Phone Number ', this.phone.length);
}



  ngOnInit() {

  }

}
