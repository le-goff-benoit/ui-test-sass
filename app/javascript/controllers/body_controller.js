import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "body", "button" ]
  change_mode() {
    this.bodyTarget.classList.toggle('dark');
    if (this.bodyTarget.classList.contains('dark')) {
      this.buttonTarget.textContent = 'Light';
    }
    else {
      this.buttonTarget.textContent = 'Dark';
    };
  }
}
