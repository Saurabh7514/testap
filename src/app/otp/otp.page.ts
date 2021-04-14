import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;


@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  digit: any;
  phone: any;

  OTP: string = '';
  sessionPhn: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute)
  {
     this.digit = this.activatedRoute.snapshot.paramMap.get('lastdigit');
     this.phone = this.activatedRoute.snapshot.paramMap.get('fullnum');
    //  console.log(this.digit);
    //  console.log(this.phone);
  }

//   otpController(event,next,prev, index){
//     console.log(index);
//     // if(index == 6) {
//     //   console.log("submit")
//     // }
//     if(event.target.value.length < 1 && prev){
//       prev.setFocus()
//     }
//     else if(next && event.target.value.length>0){
//       next.setFocus();
//     }
//     else {
//      return 0;
//     }

//  }

//  async gotoWelcome(key: string, value: any){
//    // this.router.navigate(['/welcome']);
//    // const phn = this.phone;
//   await Storage.set({
//     key: 'cap_session',
//     value: JSON.stringify({sessionPhn: this.phone})
//   });
  // session useremail set
    // await Storage.set({
    //   key: 'cap_session',
    //   value: JSON.stringify({
    //    id: 1,
    //    sessionPhn: this.phone   // set user firebase email in session(storage)
    //   })
    // });
  //  console.log('Login Set ',  phn);

    //  const ret = await Storage.get({ key: 'cap_session' });
    //  const user_phone = JSON.parse(ret.value);
    // //  console.log('Page Check Son',  user_phone);
    //  if(user_phone !== null){
    //    this.router.navigateByUrl('/welcome');
    //  }else{
    //     this.router.navigateByUrl('/login');
    //  }

//  }

 async onOtpChange(otp) {
   console.log(otp);
   console.log(otp.length);
  if (otp.length === 6) {
    await Storage.set({
      key: 'cap_session',
      value: JSON.stringify({sessionPhn: this.phone})
    });
    const ret = await Storage.get({ key: 'cap_session' });
    const user_phone = JSON.parse(ret.value);
     console.log('Page Check Son',  user_phone);
    if(user_phone !== null){
      this.router.navigateByUrl('/welcome');
    }else{
       this.router.navigateByUrl('/login');
    }
  }
}

  ngOnInit() {
  }

}
