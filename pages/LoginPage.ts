import {Page, Locator} from '@playwright/test';

export class LoginPage
{
readonly page: Page;
readonly userInput: Locator;
readonly passwordInput : Locator;
readonly loginButton: Locator;
readonly errorMessage: Locator;

constructor(page: Page)
{
    this.page = page;
this.userInput=page.locator("//input[@id='user-name']");
this.passwordInput = page.locator("//input[@id='password']");
this.loginButton = page.locator("//input[@id='login-button']");
this.errorMessage = page.locator('[data-test="error"]');
}

async navigate(){
   await this.page.goto("https://www.saucedemo.com/");
}

async login(username: string, password: string)
{
    await this.userInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    
}

}