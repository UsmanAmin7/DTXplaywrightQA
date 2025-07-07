export class OrderPage {
    constructor(page) {
      this.page = page;
      this.programSelection = page.getByText('TWE');
      
      this.menuButton = page
      .locator('kendo-card-footer')
      .filter({ hasText: 'TWE' })
      .getByRole('menu');
    
      this.openMenuItem = page.getByRole('menuitem', { name: 'Open' });

      this.uidManagement = page
      .getByRole('listitem', { name: 'UID Management' })
      .locator('div')
      .first();
      this.submitButton = page.getByRole('button', { name: 'Submit' });
    }
  
    async navigate() {
      await this.page.goto("https://atx-digitrax-qa-techx-portal.azurewebsites.net/#/admin/programs", 
        { timeout: 60000 }); // Increase timeout to 60 seconds);

    }
  
    async createOrder() {
      try {
        await this.page.getByText('TWE').click({ timeout: 600000 }); // Increase timeout to 60 seconds
        await this.programSelection.click();
        await this.menuButton.click();
        await this.openMenuItem.waitFor({ state: 'visible' });
        await this.openMenuItem.click();
        //Next Step
        await this.uidManagement.click({ timeout: 60000 }); 
        await this.page.locator('button[icon="add"]').click();
        await this.page.waitForTimeout(200);

        await this.page.getByRole('listbox', { name: 'Print Partner *' }).locator('span').nth(2).click();
        await this.page.waitForTimeout(150);
        await this.page.getByRole('listbox', { name: 'Print Partner *' }).press('ArrowDown');
        await this.page.waitForTimeout(150);
        await this.page.getByRole('listbox', { name: 'Print Partner *' }).press('Enter');
        await this.page.waitForTimeout(200);

        await this.page.getByRole('listbox', { name: 'Data Exchange Format *' }).locator('span').nth(2).click();
        await this.page.waitForTimeout(150);
        await this.page.getByRole('listbox', { name: 'Data Exchange Format *' }).press('ArrowDown');
        await this.page.waitForTimeout(150);
        await this.page.getByRole('listbox', { name: 'Data Exchange Format *' }).press('Enter');
        await this.page.waitForTimeout(200);

        await this.page.getByRole('listbox', { name: 'Select Item *' }).locator('span').nth(2).click();
        await this.page.waitForTimeout(150);
        await this.page.getByRole('listbox', { name: 'Select Item *' }).press('ArrowDown');
        await this.page.waitForTimeout(150);
        await this.page.getByRole('listbox', { name: 'Select Item *' }).press('Enter');
        await this.page.waitForTimeout(200);

        // Type slowly instead of filling instantly
        const poInput = this.page.getByRole('textbox', { name: 'Purchase Order Number *' });
        await poInput.click();
        await this.page.waitForTimeout(200);
        await poInput.type('1122334455TestAutomation', { delay: 50 }); // 100ms per keystroke
        await this.page.waitForTimeout(300);

        await this.page.getByRole('button', { name: 'Submit' }).click({ timeout: 60000 });


      } catch (error) {
        console.error('Error creating order:', error);
        throw error;
      }
    }
  }
  

  