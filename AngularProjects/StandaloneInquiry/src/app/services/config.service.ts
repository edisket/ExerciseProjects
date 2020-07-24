import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Configuration } from '../model/Configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public  AppConfig:Configuration;
  constructor(public httpClient:HttpClient) { }



  
  load():Promise<boolean>{


    this.httpClient
    let self = this;
    return new Promise<boolean>(resolve=>{

    
      this.httpClient.get<Configuration>('assets/config.json').subscribe(res=>{

        this.AppConfig = res;
        console.log(this.AppConfig);
      })
      resolve(true);
    })

    
  }


}
