import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  spinner = true;
  sessionPhn: any;
  constructor(private router: Router)
  {
    this.getPhoneSession();
  }


// use login session check work, service ka use krke bhi kar skte hai bi projects me

  async getPhoneSession(){
    // session useremail get
    const ret = await Storage.get({ key: 'cap_session' }); // capasitor session key(Mycap_session)
    const user_phone = JSON.parse(ret.value);
    console.log('Check Ssn',  user_phone);

    if(user_phone !== null){
      this.router.navigateByUrl('/welcome');
    }else{
        this.router.navigateByUrl('/login');
    }
}

ionViewDidLeave(){
  this.spinner = false;
}
// goto(){
//   this.router.navigateByUrl('/login');
// }
}
