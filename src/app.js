import {Application} from '/web_modules/stimulus.js'
import slideshowController from './controllers/slideshow_controller.js'
const application = Application.start()
application.register('slideshow', slideshowController)
