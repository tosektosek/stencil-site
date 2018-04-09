import { Component, Element, Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'content-header',
  styleUrl: 'content-header.scss'
})
export class ContentHeader {

  @Element() el: Element;

  @Event() scrolledOver: EventEmitter

  io: IntersectionObserver;

  componentDidLoad() {
    this.addIntersectionObserver();
  }

  componentDidUnload() {
    this.removeIntersectionObserver();
  }

  addIntersectionObserver() {
    this.io = new IntersectionObserver((data) => {
      // because there will only ever be one instance
      // of the element we are observing
      // we can just use data[0]
      if (data[0].isIntersecting) {
        const titleText = (data[0].target as HTMLElement).innerText;
        this.scrolled(titleText);
        this.removeIntersectionObserver();
      }
    })
    this.io.observe(this.el);
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  scrolled(titleText: string) {
    this.scrolledOver.emit(titleText)
  }

  render() {
    return (
      <h3>
        <slot></slot>
      </h3>
    );
  }
}