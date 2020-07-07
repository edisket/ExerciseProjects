import {CSMatFormGroup, CSLabelTextFC} from '@csnode/mat-forms';


export class BranchReleaseForm extends CSMatFormGroup{


    constructor(){
        super();

        this.addControl('recipientID', new CSLabelTextFC('Recipient ID', {required:true}, ''));
        this.addControl('orNo', new CSLabelTextFC('OR No', {required:true}, ''));
    }


    public get RecipientFC():CSLabelTextFC{
        return this.controls['recipientID'] as CSLabelTextFC
    }

    public get OrNoFC():CSLabelTextFC{
        return this.controls['orNo'] as CSLabelTextFC
    }



}