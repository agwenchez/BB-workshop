# Steps I Followed for the Backbase Bootcamp

### #1: Project Setup
Created a peachtree-bank project using nx to scaffold the angular application and installing the required dependencies as stated in the bootcamp instructions manual.


### #2: Generate Theme
Within the peachtree-bank/src/app/themes directory, I adjusted the colours for the following in their respective folders:

1. Primary: #27AD60
2. Secondary: #30292F
3. Info: #5D737E
4. Background Color: #F8FBF4
5. Warning: #FA9975

### #3. Add a unique font family
1. Downloaded the `Mukta` font from Google Web Fonts and added it to the peachtree-bank/src/app/themes/peachtree-bank/assets/fonts directory: 
2. Updated path for assets and fonts within the peachtree-bank/src/app/themes/peachtree-bank/scss/1-variables/_path.scss
3. Created the font's font-faces within the peachtree-bank/src/app/themes/peachtree-bank/scss/3-generic folder and imported them as required.

### #4. Navigation & Layout
1. Created a bundle file for the Accounts Transactions journey.
2. Added the bundle file to the app-routing.module along with its path attributes
3. Using the Backbase Design System, I added a navigational menu and the page layout.
4. Modified the code accordingly by cleaning up unrequired code blocks

### #5. Navigation Submenu
1. I added a navigational link inside the app.component.html file within the “Transfers” dropdown menu

### #6. Accounts Summary (Adopt)
1. I added mockProviders for the journey in the environment.ts file 
2. Imported the mockProviders into the app.module.ts file's providers array
3. Added configurations for the journey in its bundle file (account-transactions-bundle.module.ts)

### #7. Transactions (Extend)
1. I added routes for the journey in its bundle file (account-transactions-bundle.module.ts).
2. Imported the routes within the imports array
3. Modified the title of the transactions path by replacing data object's 'title' key with 'Transactions' in the childrens array.

### #8. Pockets (Build)
1. Generated an Angular Data Module for the Pockets journey from the pockets-openapi.zip file provided
2. Generated a library(pockets-api) using nx commands under libs folder 
3. Replaced the required files in the libs/pockets-api folder and made the needed modifications
4. Created a bundle file for the Pockets Journey as well as set up routes along with mockProviders
5. Created the respective views for the Journey, i.e the Pockets, PocketsList, PocketDetails and PocketSvg

### #9. Entitlements (Within Journey)
1. Imported the Entitlements module within the app.module.ts
2. Set up an interceptor for the Pockets journey
3. Added the permission objects within the interceptor
4. Used the bbIfEntitlements directive on the New Pocket button to conditionally render the button

### #10. Entitlements (Navigation)
1. Added the permission objects for navigation within the interceptor
2. Used the bbIfEntitlements directive on navigation

