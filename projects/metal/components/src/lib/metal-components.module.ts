import { APP_INITIALIZER, ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { ThemeHandlerService } from './services/theme-handler/theme-handler.service';
import { ConfigService } from './services/config/config.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StringService } from './services/manipulation/string/string.service';
import { NumberService } from './services/manipulation/number/number.service';


const rootServices: Provider[] = [
  ThemeHandlerService,
  StringService,
  NumberService
];


@NgModule({
            providers: [ HttpClientModule ]
          })
export class MetalComponentsModule
{
  /**
   * Please ensure HttpClientModule is provided before this module
   */
  public static forRoot(): ModuleWithProviders<MetalComponentsModule>
  {
    return {
      ngModule: MetalComponentsModule,
      providers: rootServices
    };
  }

  /**
   * Please ensure HttpClientModule is provided before this module
   */
  public static forRootWithConfig(): ModuleWithProviders<MetalComponentsModule>
  {
    const configInitializer = {
      provide: APP_INITIALIZER,
      useFactory: (configService: ConfigService<any>) => () =>
      {
        return configService.loadConfig();
      },
      deps: [ ConfigService, HttpClient ],
      multi: true
    };

    const services = [ ...rootServices ];
    services.push(ConfigService);
    services.push(configInitializer);
    return {
      ngModule: MetalComponentsModule,
      providers: services
    };
  }
}
