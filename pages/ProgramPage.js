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
    await this.page.waitForLoadState('networkidle');
  }

  async createProgram(programName, description) {
    await this.addNewProgramButton.waitFor({ state: 'visible', timeout: 180000 });
    await this.addNewProgramButton.click();

    // ✅ Fill Program Name via native typing to trigger form validation
    await this.programNameInput.waitFor({ state: 'visible' });
    await this.programNameInput.click();
    await this.programNameInput.type(programName, { delay: 100 }); // Simulates human typing
    await this.programNameInput.press('Tab');

    // Upload file
    const fileInput = this.page.locator('input[name="files"]');
    await fileInput.waitFor({ state: 'visible' });
    await fileInput.setInputFiles("C:\\Users\\Usman\\Downloads\\bg.jpg");

    // Fill Program Description
    await this.programDescriptionInput.waitFor({ state: 'visible' });
    await this.programDescriptionInput.type(description);

    // Brand Owner Name
    const brandOwnerInput = this.page.getByRole('textbox', { name: 'Brand Owner Name' });
    await brandOwnerInput.waitFor({ state: 'visible' });
    await brandOwnerInput.type('Dummy Owner');
    await brandOwnerInput.press('Tab');

    // Email
    const emailInput = this.page.getByRole('textbox', { name: "Brand Owner's Email" });
    await emailInput.waitFor({ state: 'visible' });
    await emailInput.type('dummyOn@yopmail.com');

    // Country selection
    const countryDropdown = this.page.getByRole('listbox', { name: 'Country' });
    await countryDropdown.waitFor({ state: 'visible' });
    await countryDropdown.locator('span').nth(2).click();
    await countryDropdown.press('ArrowDown');
    await countryDropdown.press('Enter');

    // State, City, Postal Code
    await this.page.getByRole('textbox', { name: 'State' }).type('okara');
    await this.page.getByRole('textbox', { name: 'City' }).type('asdf');
    await this.page.getByRole('textbox', { name: 'Postal Code' }).type('54000');

    // Address
    await this.page.getByRole('textbox', { name: 'Location Address' }).type('pakistan street 39');

    // Area Code & Phone
    await this.page.getByRole('textbox', { name: 'Area Code' }).type('1122');
    await this.page.getByRole('textbox', { name: 'Phone Number' }).type('223344');
    await this.page.getByRole('textbox', { name: 'Extension' }).type('5555');

    // Google Places (Kendo dropdown)
    const placeDropdown = this.page.locator('kendo-multiselect div');
    await placeDropdown.waitFor({ state: 'visible' });
    await placeDropdown.click();
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');

    // Checkbox
    const checkbox = this.page.getByRole('checkbox', { name: 'Create Separate Database' });
    await checkbox.waitFor({ state: 'attached' });
    await checkbox.check();

    // Submit and Confirm
    await this.submitButton.waitFor({ state: 'visible' });
    await this.submitButton.click();

    await this.confirmYesButton.waitFor({ state: 'visible' });
    await this.confirmYesButton.click();

    // Final network check
    await this.page.waitForLoadState('networkidle');
  }
}