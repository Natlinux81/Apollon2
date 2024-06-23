import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-add-tournament',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-tournament.component.html',
  styleUrl: './add-tournament.component.scss'
})
export class AddTournamentComponent {
  @ViewChild('image') targetImage!: ElementRef<any>;
  selectedModus = '';
  largeLogo: string | ArrayBuffer | null = null;
  smallLogo: string | ArrayBuffer | null = null;

  onSelected(value : string){
    this.selectedModus = value
    console.log('Modus:', value)
    switch(value) {
      case 'Halle':
        this.targetImage.nativeElement.src = 'TargetHall.png';
        break;
      case 'im Freien':
        this.targetImage.nativeElement.src = 'TargetOutdoor.png';
        break;
      case 'Feld':
        this.targetImage.nativeElement.src = 'TargetField.png';
        break;
      case '3D':
        this.targetImage.nativeElement.src = '3D.png';
        break;
      default:
        this.targetImage.nativeElement.src = 'apollon.ico';
    }
  }


  onFileChange(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      console.log(files[i].webkitRelativePath);
    }
  }

}
