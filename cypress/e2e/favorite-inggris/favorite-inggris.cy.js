import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

//Scenario: Change the language to Indonesian language
Given("Open TMDB website", () => {
    cy.visit("https://www.themoviedb.org/")
})

And("Sign in with valid account", () => {
    cy.get('.primary > :nth-child(3) > a', { timeout: 10000 }).click() 
    cy.login("hanifahptri12","test123")
    cy.get('#login_button').click()
})


And("Click profile icon", ()=> {
    cy.get('.avatar.background_color.blue').scrollIntoView()
    cy.get('.user > .no_click').invoke('show')
})

And("Click 'Settings'", ()=> {
    cy.get('.k-tooltip-content > .settings_content > :nth-child(3) > :nth-child(2)').click({force: true}) 
    
})

When("Click the {string}", ()=> {
    cy.get("#preferred_language-list.k-list-container.k-popup.k-group.k-reset").invoke('show').click({force: true}) 
})


And("Choose 'Indonesian' language", ()=> {
    cy.contains("(id-ID)").scrollIntoView().click()
})

And("Click 'Save'", ()=> {
    cy.get('.k-form > .k-button').scrollIntoView().click({force: true})
})

Then("The language preferences will changed to Indonesian language", ()=> {
    cy.get('.logo > img').click({force: true})
    cy.get('.title > h2').contains('Selamat datang')
})

//Scenario: Make sure default language in English
When("Click the TMDB logo to go to the homepage", ()=> {
    cy.get('.logo > img').click()
})

Then("Welcome sign must be in English", ()=> {
    cy.contains('Welcome').should('be.visible')

})

//Scenario: Mark a movie as favorite with logging in first - POSITIVE CASE
And("Click on the movie you want to mark", ()=> {
    cy.contains("Kerajaan Planet Kera").click()
    
})

When("Click on the {string} icon", ()=> {
    cy.get("#favourite").click()
    cy.get(".glyphicons_v2.heart.white.false.true").should('be.visible')

})

And("Click the film menu", ()=> {
    cy.get('.dropdown_menu > :nth-child(1) > .no_click').click()
    cy.get('.k-item.k-state-border-down > .k-animation-container > .k-group > .k-first > .k-link').click()

})

And("Go to the favorite movie list", ()=> {
    cy.get('.avatar.background_color.blue').scrollIntoView()
    cy.get('.user > .no_click').invoke('show')
    cy.contains('Daftar Tontonan').click({force: true})
    cy.get("body > div:nth-child(3) > main:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > span:nth-child(1)").click()
    cy.get('.group > .false > span.k-link').click()
    cy.get('.group > .false > .k-animation-container > .k-group > .k-first > .k-link').click()
    cy.contains('Favorit Saya').should('be.visible')
    
})

Then("The movie will appear in the favorite movie list", ()=> {
    cy.contains('Kingdom of the Planet of the Apes').should('be.visible')

})

//Scenario: Mark a TV show as favorite with logging in first - POSITIVE CASE
And("Click on the TV show you want to mark", ()=> {
    cy.get(':nth-child(2) > div.image > .wrapper > .image > .poster').click()
    
})

When("Click on the {string} icon", ()=> {
    cy.get("#favourite").click()
    cy.get(".glyphicons_v2.heart.white.false.true").should('be.visible')

})

And("Click the 'TV Show' menu", ()=> {
    cy.get('body > div:nth-child(3) > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2)').click()
    cy.get('body > div:nth-child(3) > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)').click()
})

And("Go to the favorite TV show list", ()=> {
    cy.get('.avatar.background_color.blue').scrollIntoView()
    cy.get('.user > .no_click').invoke('show')
    cy.contains('Daftar Tontonan').click({force: true})
    cy.get("body > div:nth-child(3) > main:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > span:nth-child(1)").click()
    cy.get('.group > .false > span.k-link').click()
    cy.get('.group > .false > .k-animation-container > .k-group > .k-last > .k-link').click()
    cy.get('.title_group > :nth-child(2) > :nth-child(2)').click()
    cy.contains('Favorit Saya').should('be.visible')
    
})

Then("The TV show will appear in the favorite tv show list", ()=> {
    cy.contains("Grey's Anatomy").should('be.visible')
    

})


//Scenario: Mark a movie as favorite without login - NEGATIVE CASE
When("Click on the movie you want to mark without login", ()=> {
    cy.get("img[alt='Civil War']").scrollIntoView().click()

})

Then("Click the favorite icon to mark the movie", ()=> {
    cy.get('#favourite').click()

})

And("There is validation that says user have to log in", ()=> {
    cy.contains("Masuk untuk menambahkan film ke daftar sukaan anda").should('be.visible')

})

//Scenario: Mark a TV show as favorite without login - NEGATIVE CASE
When("Click 'TV Show' menu", ()=> {
    cy.get('.dropdown_menu > :nth-child(2) > .no_click').click()
    cy.get('.k-animation-container > .k-group > .k-first > .k-link').click()
})


And("Click on the TV show you want to mark without login", ()=> {
    cy.get("img[alt='Supernatural']").scrollIntoView().click()

})

Then("Click the favorite icon to mark the TV show", ()=> {
    cy.get('#favourite').click()

})

And("There is validation that says user have to log in", ()=> {
    cy.contains("Masuk untuk menambahkan film ke daftar sukaan anda").should('be.visible')

})

//Scenario: Add more than 1 favorite movie
And("Click on another movie you want to mark", ()=> {
    cy.get("img[alt='Dune: Part Two']").scrollIntoView().click()
})

Then("The new movie you mark will appear in the favorite movie list", ()=> {
    cy.contains('Dune: Part Two').should('be.visible')
})

And("The number of movies on the favorite movie list should be greater than 1", ()=> {
    cy.get('div.card').its('length').should('be.gt', 1);

})

//Scenario: Add more than 1 favorite TV show
And("Click on another TV show you want to mark", ()=> {
    cy.get("img[alt='Young Sheldon']").scrollIntoView().click()
})

Then("The new TV show you mark will appear in the favorite TV show list", ()=> {
    cy.contains('Young Sheldon').should('be.visible')
})

And("The number of TV shows on the favorite TV show list should be greater than 1", ()=> {
    cy.get('div.card').its('length').should('be.gt', 1);

})

//Scenario: Remove a TV show from favorite TV shows list
When("Click Remove on the TV show you want to remove", ()=> {
    cy.get('#card_tv_5256ced419c2956ff608dd69 > .details > .action_bar > ul > :nth-child(4) > .account_list_action > .remove').scrollIntoView().click()
})

Then("TV show will be removed on the the favorite TV show list", ()=> {
    cy.contains("Grey's Anatomy").should('not.be.visible')
})

//Scenario: Remove a movie from favorite movies list
When("Click Remove on the movie you want to remove", ()=> {
    cy.get('#card_movie_5e959bc3db72c00014ad69d6 > .details > .action_bar > ul > :nth-child(4) > .account_list_action > .remove').click()
})

Then("Movie will be removed on the the favorite movie list", ()=> {
    cy.contains('Dune: Part Two').should('not.be.visible')
})

//Filtering favorite movies list based on 'Tanggal Rilis'
When("Click on the filtering list", ()=> {
    cy.get("ul[class='filters']").invoke('show')
})

And("Click on 'Tanggal Rilis' to filtering by release data", ()=> {
    cy.get('#filter_by_release_date > .filter_list').click({force: true})
})

Then("The list will be filtered by release date", ()=> {
    cy.url().should('include', 'sort_by=release_date')
})

//Filtering favorite movies list based on 'Popularitas'
And("Click on 'Popularitas' to filtering by popularity", ()=> {
    cy.get('#filter_by_popularity > .filter_list').click({force: true})
})

Then("The list will be filtered by popularity", ()=> {
    cy.url().should('include', 'sort_by=popularity')
})

//Filtering favorite movies list based on 'Ditambahkan'
And("Click on 'Ditambahkan' to filtering by created at", ()=> {
    cy.get('#filter_by_created_at > .filter_list').click({force: true})
})

Then("The list will be filtered by created at", ()=> {
    cy.url().should('include', 'sort_by=created_at')
})


//Scenario: Export CSV list of favorite movies
When("Click on the list options", ()=> {
    cy.get('.list_options').invoke('show').click()
})

And("Click 'Export CSV'", ()=> {
    cy.contains('Ekspor CSV').click({force:true})
})

And("Click 'Ekspor'", ()=> {
    cy.get("#created_export").click()
})

Then("A success message will appear", ()=> {
    cy.get('.notification').should('be.visible')
})

//Scenario: Change the language to English language
And("Click 'Pengaturan'", ()=> {
    cy.contains("Pengaturan").click({force: true})

})

And("Choose 'Inggris' language", ()=> {
    cy.contains("(en-US)").scrollIntoView().click()
})

And("Click 'Simpan'", ()=> {
    cy.get('.k-form > .k-button').scrollIntoView().click()
})

Then("The language preferences will changed to English language", ()=> {
    cy.get('.logo > img').click({force: true})
    cy.get('.title > h2').contains('Welcome')
})

//Sorting in ascending order
When("Click ASCENDING order in the list", ()=> {
    cy.get('.group_dropdown.sort .sort_order.selected').should('have.attr', 'data-order', 'desc').invoke('show')
    cy.get('.group_dropdown.sort .sort_order.hide').click({force: true})
})

Then("The list will be sorted by ascending", ()=> {
    cy.get('.group_dropdown.sort .sort_order.selected').should('have.attr', 'data-order', 'asc')
})

//Sorting in descending order
When("Click DESCENDING order in the list", ()=> {
    // Ubah dulu menjadi ascending 
    cy.get('.group_dropdown.sort .sort_order.hide').click({force: true})
    //Memastikan order sudah ascending
    cy.get('.group_dropdown.sort .sort_order.selected').should('have.attr', 'data-order', 'asc').invoke('show')
    cy.get('.group_dropdown.sort .sort_order.hide').click({force: true})
})

Then("The list will be sorted by descending", ()=> {
    cy.get('.group_dropdown.sort .sort_order.selected').should('have.attr', 'data-order', 'desc')
})

