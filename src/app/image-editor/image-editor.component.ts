import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.css']
})
export class ImageEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public config = {
    ImageName: 'Some image',
    AspectRatios: ["4:3", "16:9"],
    ImageUrl: 'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg',
    ImageType: 'image/jpeg'
  }
 
  public close() {
    // Fired when the editor is closed.
  }
 
  public getEditedFile(file: File) {
    // Fired when the file has been processed.
  }

}
