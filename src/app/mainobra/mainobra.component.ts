import { Component, EventEmitter, Output } from '@angular/core';

interface  IConfigViews{
  activateMetadiaria:boolean,
  activateConfiguracion:boolean
}
@Component({
  selector: 'app-mainobra',
  standalone: true,
  imports: [],
  templateUrl: './mainobra.component.html',
  styleUrl: './mainobra.component.css'
})
export class MainobraComponent {
  @Output('valueResponse')valueResponse:EventEmitter<IConfigViews> = new EventEmitter()

}
