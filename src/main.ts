
import { platformBrowser } from '@angular/platform-browser'
import { enableProdMode } from '@angular/core'
import { AppModuleNgFactory } from './app/app.module.ngfactory'

if (process.env.NODE_ENV === 'production') {
    enableProdMode()
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
