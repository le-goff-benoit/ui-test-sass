import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "button" ]
  change_mode() {
    this.element.textContent = "Hello World!"
  }
}
