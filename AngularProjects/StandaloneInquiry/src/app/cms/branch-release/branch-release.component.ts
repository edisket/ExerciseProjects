import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'
import {BranchReleaseFG} from '../../model/form/branch-release-form';
import { CSLabelAmountFC, CSLabelTextFC, CSLabelNumberFC, CSLabelDateFC, CSLabelRadioFC, CSLabelDropDownFC, CSLabelCheckBoxListFC, CSLabelDropDownValidators, CSLabelDropDownFCOptions, CSMatFormGroup } from '@csnode/mat-forms';
import { FormGroup } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';
import { BranchReleaseMessage } from 'src/app/model/message/branch-release-message';

@Component({
  selector: 'branch-release',
  templateUrl: './branch-release.component.html',
  styleUrls: ['./branch-release.component.scss']
})
export class BranchReleaseComponent implements OnInit,OnDestroy {

  form : FormGroup;
  batchId:string = '';
  ref:string=''
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
       cvRef:obj.refNo,
       batchId:obj.batchId,
     }
    

      this.service.RunTransaction('DecCvDtlOpr', message  )
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
}
