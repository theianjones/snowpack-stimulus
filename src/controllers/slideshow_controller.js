import {Controller} from '/web_modules/stimulus.js'

export default class extends Controller {
  static targets = ['slide']

  initialize() {
    console.log('hello')
    if (!this.index) {
      this.index = 0
    }
    this.showCurrentSlide()
  }

  next() {
    this.index++
  }

  previous() {
    this.index--
  }

  showCurrentSlide() {
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle('slide--current', this.index == i)
    })
  }

  get index() {
    return parseInt(this.data.get('index'))
  }

  set index(value) {
    let newValue =
      value < 0
        ? this.slideTargets.length - 1
        : value % this.slideTargets.length
    this.data.set('index', newValue)
    this.showCurrentSlide()
  }
}
