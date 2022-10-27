import { basePage } from "./basePage";
import {By} from 'selenium-webdriver'


export class pageObjects extends basePage {
    phoneBtn: By = By.xpath('//*[@id="itemc"]')
    monitorsBtn: By = By.xpath('//*[@id="itemc"]')
    laptopsBtn: By = By.xpath('//*[@id="itemc"]')
    signupBtn: By = By.xpath('//*[@id="signin2"]')

constructor() {
    super({url: 'https://www.demoblaze.com/index.html'})
}
}
