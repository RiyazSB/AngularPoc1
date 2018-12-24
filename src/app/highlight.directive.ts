import { Directive, ElementRef, HostListener, Input } from "@angular/core";



@Directive({
  selector: '[Highlight]'
})

export class HighlightDirective {
  @Input() color;

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter') onmouseenter() {
    this.el.nativeElement.style.cursor = 'pointer';
    this.highlight(this.color);
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight('white');
  }

  private highlight(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

