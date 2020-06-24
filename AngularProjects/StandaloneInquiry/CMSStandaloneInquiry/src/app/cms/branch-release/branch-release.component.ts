import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'
@Component({
  selector: 'branch-release',
  templateUrl: './branch-release.component.html',
  styleUrls: ['./branch-release.component.scss']
})
export class BranchReleaseComponent implements OnInit {

  batchId:string = '';
  ref:string=''
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let obj = {
        batchId: params['batchId'],
        refNo: params['ref']
      }
      

      this.batchId = params['batchId'];
      this.ref = params['ref'];
      console.log(obj)
    });



  }

}
