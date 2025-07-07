import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Enter your email' });
    this.nextButton = page.getByRole('button', { name: 'Next' });
    this.passwordInput = page.getByRole('textbox', { name: 'Enter the password' });
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    this.dontShowAgainCheckbox = page.getByRole('checkbox', { name: "Don't show this again" });
    this.yesButton = page.getByRole('button', { name: 'Yes' });
  }

  async login(email, password) {
    await this.page.goto('https://login.microsoftonline.com/ed2d75c6-79cb-4e77-bcb2-3c54b9d7308f/oauth2/v2.0/authorize?client_id=e4986b54-178d-455f-a3ad-16d5361d6ab2&scope=https%3A%2F%2Fatxtrax.com%2F4b00003c-db49-4af3-99a4-ad3637238ce0%2FDigitrax.ReadWrite.All%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fatx-digitrax-qa-techx-portal.azurewebsites.net%2F');
    await this.emailInput.fill(email);
    await this.nextButton.click();
    await this.page.waitForTimeout(1000); // Wait for the password input to appear
    await this.passwordInput.fill(password);
    await this.signInButton.click();
    await this.dontShowAgainCheckbox.check();
    await this.yesButton.click();
  }
}
