import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "body", "button" ]
  connect() {
    if (localStorage.getItem('theme') == null) {
      this.set_light_cookie();
    }
    else {
      if (localStorage.getItem('theme') == 'light') {
        this.set_light_mode();
      }
      else {
        this.set_dark_mode();
      }
    }
}

  change_mode() {
    this.bodyTarget.classList.toggle('dark');
    if (this.bodyTarget.classList.contains('dark')) {
      this.buttonTarget.textContent = 'Light';
      this.set_dark_cookie();
    }
    else {
      this.buttonTarget.textContent = 'Dark';
      this.set_light_cookie();
    };
  }

  set_light_mode() {
    this.bodyTarget.classList.remove('dark');
    this.buttonTarget.textContent = 'Dark';
  }

  set_dark_mode() {
    this.bodyTarget.classList.add('dark');
    this.buttonTarget.textContent = 'Light';
  }

  set_light_cookie() {
    if (localStorage.getItem('theme') == 'light') {
    }
    else {
      localStorage.setItem('theme', 'light');
    }
  }

  set_dark_cookie() {
    if (localStorage.getItem('theme') == 'dark') {
    }
    else {
      localStorage.setItem('theme', 'dark');
    }
  }
}
