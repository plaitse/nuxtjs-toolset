# nuxtjs-toolset

Nuxt.js is a JavaScript framework to prepare and render VueJS pages. A better SEO is one of its benefits.

## Firebase

From folders 5 and above, set Firebase rules to:

```js
{
  "rules": {
    ".read": true,
    ".write": "auth != null"
  }
}
```
Otherwise:

```js
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
