import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'
import {BranchReleaseFG} from '../../model/form/branch-release-form';
import { CSLabelAmountFC, CSLabelTextFC, CSLabelNumberFC, CSLabelDateFC, CSLabelRadioFC, CSLabelDropDownFC, CSLabelCheckBoxListFC, CSLabelDropDownValidators, CSLabelDropDownFCOptions, CSMatFormGroup } from '@csnode/mat-forms';
import { FormGroup } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';
import { BranchReleaseMessage } from 'src/app/model/message/branch-release-message';
import { BranchReleaseResponse } from 'src/app/model/message/response/branch-release-response';

@Component({
  selector: 'branch-release',
  templateUrl: './branch-release.component.html',
  styleUrls: ['./branch-release.component.scss']
})
export class BranchReleaseComponent implements OnInit,OnDestroy {

  form : FormGroup;
  batchId:string = '';
  ref:string='';
  selectedImage:string = '';
  srcFile:string = '';
  // mainForm: BranchReleaseFG = new BranchReleaseFG();
  constructor(
    private route: ActivatedRoute,
    public service: TransactionService
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();

    this.route.queryParams.subscribe(params => {
      let obj = {
        batchId: params['b'],
        refNo: params['c']
      }


      console.log(obj);
     let message:BranchReleaseMessage = {}



     message.RequestBody = {
       encryptedCV:obj.refNo,
       encryptedBatch:obj.batchId,
     }
    

      this.service.RunTransaction('DecCvDtlOpr', message  ).subscribe(res=>{

        let response = JSON.parse(res as string);


        message = response as BranchReleaseMessage;

        this.batchId = message.ResponseBody.BatchId;
        this.ref = message.ResponseBody.CVRef;

        console.log(message);
        
      }, err=>{
        console.log(err);
      })
    });



  }

  createForm(): CSMatFormGroup {
    let fg = new CSMatFormGroup();
              
    fg.addControl('RecipientFC', new CSLabelTextFC('LOA CV Reference No', {}, ''));
  fg.addControl('ORFC', new CSLabelTextFC('Batch Reference No', {}, ''));

  
    return fg;
    }

    getFormControl(name: string) {
      return this.form.get(name);
    }
  
    ngOnDestroy() { }


    OnFileSelected(file) {
      var self = this;
  
      const reader = new FileReader();
  
      let blob = file[0].slice(0, file[0].size);
  
      reader.onload = () => {
        var base64Data = < string > reader.result;
  
        base64Data = base64Data.split(',')[1];
  
  
        this.selectedImage = base64Data;
  
        this.PreviewImage(base64Data);
  
      }
  
      reader.readAsDataURL(blob);
  
  
    }

    PreviewImage(file) {

      this.srcFile = "data:image/png;base64," + file;
    }
}
