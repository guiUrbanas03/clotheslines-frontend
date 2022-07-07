import { makeAutoObservable } from 'mobx';

export class UiStore {
  activeGradientBackground: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  reset(): void {}

  setActiveGradientBackground(value: boolean) {
    this.activeGradientBackground = value;
  }

  storeActiveGradientBackground(value: boolean) {
    localStorage.setItem('gradient', JSON.stringify(value));
    this.setActiveGradientBackground(value);
  }

  fetchActiveGradientBackground() {
    const activeGradient = localStorage.getItem('gradient') || 'false';

    this.setActiveGradientBackground(JSON.parse(activeGradient));
  }
}

export default new UiStore();
