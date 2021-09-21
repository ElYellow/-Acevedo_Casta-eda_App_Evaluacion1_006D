import { Component } from '@angular/core';



interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[] =[



    {
      icon: 'log-in-outline',
      name: 'Iniciar Sesión', 
      redirecTo: '/registro'
    },

    
    {
      icon: 'logo-windows',
      name: 'Como Instalar Windows 10', 
      redirecTo: '/windows'
    },

    {
      icon: 'key-outline',
      name: 'Activar Windows 10', 
      redirecTo: '/activarwindows'
    },

    {
      icon: 'laptop-outline',
      name: 'Códigos de activación para Windows 10', 
      redirecTo: '/claves'
    },

    {
      icon: 'glasses-outline',
      name: 'Limpiar PC', 
      redirecTo: '/limpiarpc'
    },

  ]


  checkDarkTheme(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if(prefersDark.matches)
      document.body.classList.toggle(  'dark'  );
  }
  darkMode: boolean= true;

 
  

  constructor(){

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;

  }
  cambio(){

    this.darkMode =!this.darkMode;
    document.body.classList.toggle(  'dark'  );
  
    }
}

