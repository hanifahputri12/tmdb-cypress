#This is regression test in English language
Feature: Mark as Favorite

    Background:
        Given Open TMDB website
    
    @regression-testing-english
    Scenario: Make sure default language in English
        And Sign in with valid account
        When Click the TMDB logo to go to the homepage
        Then Welcome sign must be in English

    @regression-testing-english
    Scenario: Mark a movie as favorite with logging in first - POSITIVE CASE
        And Sign in with valid account
        And Click the film menu
        And Click on the movie you want to mark
        When Click on the 'Mark as Favorite' icon
        And Go to the favorite movie list
        Then The movie will appear in the favorite movie list

    @regression-testing-english
    Scenario: Mark a movie as favorite without login - NEGATIVE CASE
        When Click on the movie you want to mark without login
        Then Click the favorite icon to mark the movie
        And There is validation that says user have to log in
    
    @regression-testing-english
    Scenario: Add more than 1 favorite movie
        And Sign in with valid account
        And Click the film menu
        And Click on another movie you want to mark
        When Click on the 'Mark as Favorite' icon
        And Go to the favorite movie list
        Then The new movie you mark will appear in the favorite movie list
        And The number of movies on the favorite movie list should be greater than 1

    @regression-testing-english
    Scenario: Remove a movie from favorite movies list
        And Sign in with valid account
        And Go to the favorite movie list
        When Click Remove on the movie you want to remove
        Then Movie will be removed on the the favorite movie list

    @regression-testing-english
    Scenario: Mark a TV show as favorite with logging in first - POSITIVE CASE
        And Sign in with valid account
        And Click the 'TV Show' menu
        And Click on the TV show you want to mark
        When Click on the 'Mark as Favorite' icon
        And Go to the favorite TV show list
        Then The TV show will appear in the favorite tv show list

    @regression-testing-english
    Scenario: Mark a TV show as favorite without login - NEGATIVE CASE
        When Click 'TV Show' menu
        And Click on the TV show you want to mark without login
        Then Click the favorite icon to mark the TV show
        And There is validation that says user have to log in

    @regression-testing-english
    Scenario: Add more than 1 favorite TV show
        And Sign in with valid account
        And Click the 'TV Show' menu
        And Click on another TV show you want to mark
        When Click on the 'Mark as Favorite' icon
        And Go to the favorite TV show list
        Then The new TV show you mark will appear in the favorite TV show list
        And The number of TV shows on the favorite TV show list should be greater than 1

    @regression-testing-english
    Scenario: Remove a TV show from favorite TV shows list
        And Sign in with valid account
        And Go to the favorite TV show list
        When Click Remove on the TV show you want to remove
        Then TV show will be removed on the the favorite TV show list

    @regression-testing-english
    Scenario: Sorting in ascending order
        And Sign in with valid account
        And Go to the favorite movie list
        When Click ASCENDING order in the list
        Then The list will be sorted by ascending
    @regression-testing-english
    Scenario: Sorting in descending order
        And Sign in with valid account
        And Go to the favorite movie list
        When Click DESCENDING order in the list
        Then The list will be sorted by descending

    @regression-testing-english
    Scenario: Filtering favorite movies list based on 'Release Date'
        And Sign in with valid account
        And Go to the favorite movie list
        When Click on the filtering list
        And Click on 'Release Date' to filtering by release data
        Then The list will be filtered by release date

    @regression-testing-english
    Scenario: Filtering favorite movies list based on 'Popularity'
        And Sign in with valid account
        And Go to the favorite movie list
        When Click on the filtering list
        And Click on 'Popularity' to filtering by popularity
        Then The list will be filtered by popularity

    @regression-testing-english
    Scenario: Filtering favorite movies list based on 'Date Added'
        And Sign in with valid account
        And Go to the favorite movie list
        When Click on the filtering list
        And Click on 'Date Added' to filtering by created at
        Then The list will be filtered by created at

    @regression-testing-english
    Scenario: Export CSV list of favorite movies
        And Sign in with valid account
        And Go to the favorite movie list  
        When Click on the list options
        And Click 'Export CSV'
        And Click 'Export'
        Then A success message will appear




    