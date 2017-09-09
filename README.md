# Pokédex

A simple Pokédex built with React

## Quick Start

1. Clone this repo using `git clone --depth=1 https://github.com/yogakurniawan/react-pokemon-dex.git`
2. Move to the appropriate directory: `cd react-pokemon-dex`.<br />
3. Run `yarn install` or `npm install`
4. Run `yarn start` or `npm start` to see the example app at `http://localhost:3000`.

## Issue

Currently [PokeApi](https://pokeapi.co/) is protected using CloudFare to prevent DDOS attacks. See the owner's statement [here](https://github.com/PokeAPI/pokeapi/issues/298#issuecomment-314693139).

The protection causes error [403 HTTP Response](https://github.com/PokeAPI/pokeapi/issues/224#issue-164207083) if we are accessing [PokeApi](https://pokeapi.co/) from asian country IP addresses.

### Resolution

To prevent such error, my current solution is to use proxy client to connect with US or UK IP addresses. I use [Jumbo Proxy Switcher](https://chrome.google.com/webstore/detail/jumbo-proxy-switcher/mnjmjnofadekgmfahkikcjbckdofddbb) on my chrome. That fixes the error 403 issue for now.

## Demo

[React Pokemon Dex Heroku](https://react-pokemondex.herokuapp.com/)