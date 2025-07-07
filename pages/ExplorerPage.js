export class ExplorerPage {
    constructor(page) {
      this.page = page;
      this.programSelection = page.getByText('TWE');
      this.menuButton = page.locator('kendo-card-footer').filter({ hasText: 'TWE' }).getByRole('menu');
      this.openMenuItem = page.getByRole('menuitem', { name: 'Open' });
      this.explorerMenuItem = page.getByRole('listitem', { name: 'Explorer' }).locator('div').first();
      this.uidInput = page.getByRole('textbox', { name: 'Enter a Unique Identifier' });
      this.searchButton = page.getByRole('button', { name: 'Search' });
      //This constructor is like setting up a map of all important elements on the Explorer Page:
      // 1. Selects the "TWE" program.
      // 2. Opens the menu.
      // 3. Clicks "Open".
      // 4. Selects "Explorer".
      // 5. Finds the search input box.
      // 6. Finds the search button.
      //7. By storing these elements in variables, we can reuse them in tests without searching for them again.
    }
  
    async navigate() {
      await this.page.goto('https://atx-digitrax-qa-techx-portal.azurewebsites.net/#/admin/programs');
      
    }
  
    //→ This function takes a uid parameter, which will be used to enter a unique identifier in the search field.
    async exploreUID(uid) {
      await this.programSelection.click();
      
      await this.menuButton.click();
      await this.openMenuItem.waitFor({ state: 'visible' });
      await this.openMenuItem.click();
      
      await this.explorerMenuItem.click();
      await this.uidInput.fill(uid);
      await this.searchButton.click();

     // This function mimics a user journey of:
     // 1. Clicking a category (Program selection).
     // 2. Opening a menu.
     // 3. Selecting an option.
     // 4. Navigating further.
     // 5. Entering a search keyword (UID).
     // 6. Clicking the search button.
    }
  }
  