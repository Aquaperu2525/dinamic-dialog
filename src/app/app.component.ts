import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { DynamicdialogComponent } from './dynamicdialog/dynamicdialog.component';
import { Subscription } from 'rxjs';
import { MainobraComponent } from './mainobra/mainobra.component';

export interface IDynamicDialogConfig {
  title?: string;
  acceptButtonTitle?: string;
  declineButtonTitle?: string;
  dialogContent: TemplateRef<any>;
  matdialogcontent_height:string;
  matdialogcontent_width:string;
}
//confirguracion que permite tener el 100% de pantalla para el dialog
export const configBase =  {
  maxWidth:"100vw",
  width: '100vw',
  height: '100%',
  panelClass:'panelclassdialog',
  enterAnimationDuration:'500ms',
  exitAnimationDuration:'500ms',      
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainobraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  panel:Subscription

  @ViewChild('configuracionObraDialogTemplate')  configuracionObraDialogTemplate: TemplateRef<any> | undefined;
  constructor(
    public dialog: MatDialog, 
  ){}
  recibiRespuesta($event:any){
    let {mt} = $event.activateMetadiaria
     let {mt1} = $event.activateConfiguracion
    console.log(mt1)
  }
  valorizacion(){
    const dialogRef = this.dialog.open(DynamicdialogComponent, 
      {
        /**efecto full screen */
        //...configBase,
        /** */
        backdropClass: "hello",
      autoFocus: false,
        data: {
          title: 'Información de la Obra',
          dialogContent: this.configuracionObraDialogTemplate,
          //acceptButtonTitle: 'Ok',
          //declineButtonTitle: ''
        }
      });
    //cuando se llama a la ruta, nunca se ejecuta esta parte
    this.panel = dialogRef.afterClosed().subscribe(async result => {
      
      if (!result) return;
      // delete it
     
      
    }); 

    


  }

}
