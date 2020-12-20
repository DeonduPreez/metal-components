import { Injectable } from '@angular/core';
import { MetalTheme } from '../../models/theme-types';


@Injectable({
              providedIn: 'root'
            })
export class ThemeHandlerService
{
  constructor()
  {
    // this.body = document.getElementsByTagName('body')[0];
    // let themeExists = false;
    // for (const className of this.body.classList.value.split(' '))
    // {
    //   if (className.includes('theme'))
    //   {
    //     themeExists = true;
    //     break;
    //   }
    // }
    // if (!themeExists)
    // {
    //   localStorage.setItem('dark-theme', this.isDarkTheme.toString());
    // }
  }

  public theme: MetalTheme = MetalTheme.Light;

  public title = 'component-test';
  private body!: HTMLBodyElement;

  public storeThemeSelection(): void
  {
    // localStorage.setItem('dark-theme', this.isDarkTheme.toString());
    // this.setBodyTheme();
  }

  private setBodyTheme(theme: MetalTheme): void
  {
    if (this.body.classList.contains(this.theme))
    {
      this.body.classList.remove(this.theme);
    }

    if (theme != null)
    {
      this.theme = theme;
    }

    if (!this.body.classList.contains(this.theme))
    {
      this.body.classList.add(this.theme);
    }
  }

  public InitTheme(): void
  {
    // const savedTheme = localStorage.getItem('dark-theme');
    // this.body.classList.add('mat-app-background');
    // if (savedTheme != null)
    // {
    //   this.isDarkTheme = JSON.parse(savedTheme);
    // }
    // this.setBodyTheme();
  }
}
