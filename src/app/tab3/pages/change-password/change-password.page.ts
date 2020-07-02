import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { verification } from 'src/app/services/verification';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  // isOldPassword = true;
  // oldpassword: string;
  public newPassword: string;
  public checkPassword: string;
  public httpOptions: any;
  public verifiData: verification;
  private response: any;

  constructor(
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private router: Router,
    private localService: LocalStorageService,
    public http: HttpClient) { }

  ngOnInit(){
    this.httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json', 
        'Accept': 'application/json', 
        'token': this.localService.getItem('token')})
    };
    // this.http.post('http://175.24.88.62:8080/pcs/userVerification/updatePassword.do',
    //   {uId: this.localService.getItem('uId'), passwordToken: },this.httpOptions)
    //   .subscribe(data=>{
    //     this.verifiData = JSON.parse(JSON.stringify(data));  
    //     console.log(this.verifiData);

    //   },function(error){console.log(error);})
  }

  onSave() {


    this.http.post('http://175.24.88.62:8080/pcs/userVerification/updatePassword.do',
    {uId: this.localService.getItem('uId'), passwordToken: this.newPassword},this.httpOptions)
    .subscribe(response=>{
      // this.verifiData = JSON.parse(JSON.stringify(data));  
      // console.log(this.verifiData);
      this.response=response;
      console.log(this.response);
      if(this.response!=null){
        alert('修改成功!');
        this.router.navigateByUrl('/tabs/tab3');
      }
      else{
        alert('修改失败!');
      }
    },function(error){console.log(error);})


    // const oldPass = this.localService.getItem('user').passport;
    // this.isOldPassword = oldPass == this.oldpassword ? true : false;
    // if (this.newPassword == this.checkPassword && this.isOldPassword) {
    //   const tmp = this.localService.get('user', '');
    //   tmp.passport = this.newPassword;
    //   this.localService.set('user', tmp);
    //   console.log('修改成功');
    //   this.router.navigateByUrl('/setting');
    //   const toast = await this.toastCtrl.create({
    //     message: '修改成功',
    //     duration: 2000
    //   });
    //   await toast.present();
    // }
  }
}
