import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
              providedIn: 'root'
            })
export class ConfigService<T>
{
  private configFile!: T;

  public get config(): T
  {
    // TODO : Ensure this property cannot get edited (deep clone it). It should only be primitive types, so a recursive function should do it
    return this.configFile;
  }

  constructor(private httpClient: HttpClient)
  {
  }

  // TODO : Write post-install script that adds config.json to project and adds it to assets in angular.json
  public loadConfig(): Promise<void>
  {
    return new Promise<void>(async (resolve, reject) =>
                             {
                               const configFile = await this.httpClient.get<T>('/assets/config/config.json').toPromise()
                                                            .catch(() =>
                                                                   {
                                                                     let errorMsg = 'Config file does not exist';
                                                                     if (isDevMode())
                                                                     {
                                                                       errorMsg += ' Please ensure /assets/config/config.json exists. If it does exist, please ensure your angular.json file has it listed as an asset';
                                                                     }
                                                                     console.error(errorMsg);
                                                                     reject();
                                                                   });
                               if (configFile == null)
                               {
                                 return;
                               }
                               this.configFile = configFile;
                               resolve();
                             });
  }
}
