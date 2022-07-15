# Lidi web app

## Introduction

This is my first real project I made with Angular.
Basically, it is a simple CRUD Web App which helps people find a 🏖️ in a place they like.

## Technical aspects

Everything you see here is written in HTML, SCSS & Bootstrap, and Typescript.
For the backend I used Firebase, so in order for this to work properly you need to change some things on the code like the API keys for your database and for the Google Maps API.
Also, in order to get admin permission for a certain user, you need to set the UID on the typescript in the admin.guard.ts file: as you may have already guessed, this is not ready for production as it has been implemented this way just to speed things up during the development.
Here are the files you need to edit:

- auth.service.ts
- admin.guard.ts
- search.component.ts
- header.component.ts
- details.component.ts

If you want to test authentication and it doesn't work properly, start chrome or any other browser with web-security disabled. You can also try this:
WIN key + R, and paste the following command:

```
chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
```

## Screenshots

![CRUD](https://i.imgur.com/4SEqexX.jpg)
![Beach Details](https://i.imgur.com/95fwEWh.png)
![Home](https://i.imgur.com/dMYEKKf.jpg)
