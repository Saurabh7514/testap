import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { Router, Routes, RouterModule } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  sessionPhone: any;



  constructor(private alertCtrl: AlertController,private router: Router,
    public loadingController: LoadingController)
  {
    this.getPhoneSession();
   }



  async getPhoneSession(){
        const ret = await Storage.get({ key: 'cap_session' }); // capasitor session key(Mycap_session)
        const user_phone = JSON.parse(ret.value);

        this.sessionPhone = user_phone.sessionPhn;

        console.log('Login Pnone Get ',  user_phone.sessionPhn);
        console.log('Login Pnone Get ',  this.sessionPhone);
  }



  // for remove or clear storage (session Log Out)
  async removeStorage() {
    await Storage.remove({ key: 'cap_session' });
    await Storage.clear();
  }
  // for user logout
  async logoutAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Log Out',
      message: 'Are you sure to Logout ?',
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {}
      }, {
        text: 'Ok',
        handler: async () => {
          this.removeStorage();
          const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
            duration: 2000
          });
          await loading.present();
            console.log('Done Logout success.');
            setTimeout( () => {
              this.router.navigateByUrl('/home')

            }, 1000);
        }
      }
    ]
  });
  await alert.present();
}


  ngOnInit() {
  }

}
