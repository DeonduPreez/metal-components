import { Component, OnInit } from '@angular/core';
import { ThemeHandlerService } from '../../../metal/components/src/lib/services/theme-handler/theme-handler.service';


@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: [ './app.component.scss' ]
           })
export class AppComponent implements OnInit
{
  public isDarkTheme = false;

  public title = 'component-test';
  private body!: HTMLBodyElement;

  constructor(private th: ThemeHandlerService){}

  public ngOnInit(): void
  {
    this.th.InitTheme();
  }

  public storeThemeSelection(): void
  {
    localStorage.setItem('dark-theme', this.isDarkTheme.toString());
    this.setBodyTheme();
  }

  private setBodyTheme(): void
  {
    if (this.isDarkTheme && !this.body.classList.contains('dark-theme'))
    {
      this.body.classList.add('dark-theme');
    }
    else
    {
      this.body.classList.remove('dark-theme');
    }
  }
}
