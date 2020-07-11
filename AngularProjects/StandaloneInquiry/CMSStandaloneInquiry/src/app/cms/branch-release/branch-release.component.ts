import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'
import {BranchReleaseFG} from '../../model/form/branch-release-form';
import { CSLabelAmountFC, CSLabelTextFC, CSLabelNumberFC, CSLabelDateFC, CSLabelRadioFC, CSLabelDropDownFC, CSLabelCheckBoxListFC, CSLabelDropDownValidators, CSLabelDropDownFCOptions, CSMatFormGroup } from '@csnode/mat-forms';
import { FormGroup } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';

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
    tran: TransactionService
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();

    this.route.queryParams.subscribe(params => {
      let obj = {
        batchId: params['batchId'],
        refNo: params['ref']
      }
      

      this.batchId = params['batchId'];
      this.ref = params['ref'];
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
