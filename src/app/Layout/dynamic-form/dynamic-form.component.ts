import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  registerFormArray: FormGroup;
  dynamicFormData: any;

  constructor(private httpClient: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerFormArray = this.fb.group({

    });
    //Getting  Dynamin Controle detail
    this.httpClient.get('/assets/formData.json').subscribe(res => {
      this.dynamicFormData = res;
      this.createFormControle();

    })
  }
  // Here i am creating fomr control based on dynamicFormData
  createFormControle() {
    this.dynamicFormData.forEach(element => {
      if (element.Required === true) {
        // console.log("helllo");
        this.registerFormArray.addControl(element.id, new FormControl('', Validators.required))
      } else {
        this.registerFormArray.addControl(element.id, new FormControl(''))
      }

    });
    // console.log("FormArrayData", this.registerFormArray);
    //  console.log("FormArrayData",this.registerFormArray);
  };
  registerFormArray = new FormGroup({
    video_title : new FormControl('',Validators.required),
    duration: new FormControl('',Validators.required),
    description : new FormControl(''),
    link  : new FormControl('',Validators.required),
    paltform  : new FormControl('',Validators.required),
    status  : new FormControl('',Validators.required)
  });
  
  showMsg: boolean;
  btnDisable = false;
  onSubmit() {
    // console.log("inside OnSubmit----->", this.registerFormArray.value)
    if(this.registerFormArray.get('video_title').valid && this.registerFormArray.get('duration').valid){
      if(this.registerFormArray.get('link').valid && this.registerFormArray.get('paltform').valid){
        if(this.registerFormArray.get('status').valid){
          console.log("sucessfully submited")
          this.showMsg = true;
          this.btnDisable = true;
          console.log("Data are------->",JSON.stringify([this.registerFormArray.value]));
        }else{
          alert("Fields can't be blank! please check and submit again")
        }
      }else{
        alert("Fields can't be blank! please check and submit again")
      }
    }
    else{
      alert("Fields can't be blank! please check and submit again")
    }
    // this.registerFormArray.controls.value
    // alert(JSON.stringify(this.registerFormArray.value))
    // }
  }
}
