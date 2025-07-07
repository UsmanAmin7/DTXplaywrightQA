export class ProgramPage {
  constructor(page) {
    this.page = page;
    this.addNewProgramButton = page.getByRole('button', { name: 'Add New Program' });
    this.programNameInput = page.getByRole('textbox', { name: 'Program Name' });
    this.programDescriptionInput = page.getByRole('textbox', { name: 'Program Description' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.confirmYesButton = page.getByRole('button', { name: 'Yes' });
  }

  async navigate() {
    await this.page.goto('https://atx-digitrax-qa-techx-portal.azurewebsites.net/#/admin/programs');
  }

  async createProgram(programName, description) {
  await this.addNewProgramButton.waitFor({ state: 'visible', timeout: 60000 });
  await this.addNewProgramButton.click();
  await this.page.waitForTimeout(300);

  // Fill Program Name
  await this.programNameInput.click();
  await this.page.waitForTimeout(200);
  await this.programNameInput.fill(programName);
  await this.page.waitForTimeout(300);

  // Upload file
  await this.page.locator('input[name="files"]').click();
  await this.page.waitForTimeout(200);
  await this.page.locator('input[name="files"]').setInputFiles("C:\\Users\\Usman\\Downloads\\bg.jpg");
  await this.page.waitForTimeout(300);

  // Fill Program Description
  await this.programDescriptionInput.click();
  await this.page.waitForTimeout(200);
  await this.programDescriptionInput.fill(description);
  await this.page.waitForTimeout(300);

  // Brand Owner Name
  await this.page.getByRole('textbox', { name: 'Brand Owner Name' }).click();
  await this.page.waitForTimeout(200);
  await this.page.getByRole('textbox', { name: 'Brand Owner Name' }).fill('Dummy Owner');
  await this.page.waitForTimeout(200);
  await this.page.getByRole('textbox', { name: 'Brand Owner Name' }).press('Tab');
  await this.page.waitForTimeout(150);

  // Email
  await this.page.getByRole('textbox', { name: "Brand Owner's Email" }).fill('dummyOn@yopmail.com');
  await this.page.waitForTimeout(300);

  // Country selection
  await this.page.getByRole('listbox', { name: 'Country' }).locator('span').nth(2).click();
  await this.page.waitForTimeout(200);
  await this.page.getByRole('listbox', { name: 'Country' }).press('ArrowDown');
  await this.page.waitForTimeout(150);
  await this.page.getByRole('listbox', { name: 'Country' }).press('Enter');
  await this.page.waitForTimeout(300);

  // State, City, Postal Code
  await this.page.getByRole('textbox', { name: 'State' }).fill('okara');
  await this.page.waitForTimeout(150);
  await this.page.getByRole('textbox', { name: 'City' }).fill('asdf');
  await this.page.waitForTimeout(150);
  await this.page.getByRole('textbox', { name: 'Postal Code' }).fill('54000');
  await this.page.waitForTimeout(200);

  // Address
  await this.page.getByRole('textbox', { name: 'Location Address' }).fill('pakistan street 39');
  await this.page.waitForTimeout(200);

  // Area Code & Phone
  await this.page.getByRole('textbox', { name: 'Area Code' }).fill('1122');
  await this.page.waitForTimeout(200);
  await this.page.getByRole('textbox', { name: 'Phone Number' }).fill('223344');
  await this.page.waitForTimeout(200);
  await this.page.getByRole('textbox', { name: 'Extension' }).fill('5555');
  await this.page.waitForTimeout(200);

  // Google Places dropdown
  await this.page.locator('kendo-multiselect div').click();
  await this.page.waitForTimeout(200);
  await this.page.keyboard.press('ArrowDown');
  await this.page.waitForTimeout(150);
  await this.page.keyboard.press('Enter');
  await this.page.waitForTimeout(250);

  // Checkbox & Submit
  await this.page.getByRole('checkbox', { name: 'Create Separate Database' }).check();
  await this.page.waitForTimeout(200);
  await this.submitButton.click();
  await this.page.waitForTimeout(300);
  await this.confirmYesButton.click();
}

}