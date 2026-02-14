import { Page, Locator } from '@playwright/test';

export class LoginPagetieout{
readonly page: Page;
readonly emailField: Locator;
readonly nextButton: Locator;
readonly password: Locator;
readonly signInButton: Locator;

constructor(page: Page){
    this.page = page;
    this.emailField = page.getByRole('textbox', { name: 'Enter your email, phone, or' })
    this.nextButton = page.getByRole('button', { name: 'Next' })
    this.password = page.getByRole('textbox', {name: 'Password'})
    this.signInButton = page.getByRole('button', {name: 'Sign in'})
}

async goto(url: string){
    await this.page.goto(url)
}

async enterEmail(email: string){
    await this.emailField.click();
    await this.emailField.fill(email);
    await this.nextButton.click();
}
async enterPassword(password: string){
    await this.password.click();
    await this.password.fill(password);
    await this.signInButton.click();
}
}

