import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNoImage]',
})
export class NoImageDirective {
  constructor(
    //ALLÁ DONDE COLOQUE ESTA DIRECTIVA EL "nodoDOM"
    //ES EL NODO DONDE COLOQUEMOS ESTA DIRECTIVA
    private nodoDOM: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('error')
  onError(): void {
    //this.nodoDOM.nativeElement.src="assets/img/no-image.jpg";
    this.renderer.setAttribute(
      this.nodoDOM.nativeElement,
      'src',
      'assets/img/no-image.jpg'
    );
    console.log(
      'setAttribute: ',
      this.renderer.setAttribute(
        this.nodoDOM.nativeElement,
        'src',
        'assets/img/no-image.jpg'
      )
    );
  }
}
