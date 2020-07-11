import { Injectable } from '@angular/core';
import { BranchReleaseRequest } from '../model/message/request/branch-release-request';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  transactionUrl:string = ''

  constructor(private config: ConfigService, private httpClient:HttpClient) { 
    //this.transactionUrl = config.AppConfig.transactingBranch;
  }


  

  public RunTransaction<BranchReleaseMessage>(request:BranchReleaseRequest){

    // return this.httpClient.post<BranchReleaseMessage>(this.transactionUrl, request, )
    
  }




}
