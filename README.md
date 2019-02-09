# 🙌 VeeValidate with Laravel validation errors
[![Latest Version on NPM](https://img.shields.io/npm/v/%40pmochine%2Fvee-validate-laravel.svg?style=flat-square)](https://npmjs.com/package/%40pmochine%2Fvee-validate-laravel)
[![Total Downloads on NPM](https://img.shields.io/npm/dt/%40pmochine%2Fvee-validate-laravel.svg)](https://www.npmjs.com/package/%40pmochine%2Fvee-validate-laravel)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

![VeeValidate with Laravel validation](https://baianat.github.io/vee-validate/logo.png)

**If you are looking for an easy module for showing Laravel validation errors, this package is for you. 😜**

>***Prerequisites**:  vue >= 2.0.0 and vee-validate >= 2.1.0

*⚠️ Combine this package with a [global axios interceptor](https://github.com/pmochine/vue-axios-interceptors) to get the most of it*

## Installation in 2 Steps*

### 1: Install the package 💻 on [NPM](https://www.npmjs.com/package/@pmochine/vee-validate-laravel)
```bash
npm i @pmochine/vee-validate-laravel
```
### 2: Add the package in your main.js

```javascript
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VeeValidateLaravel from '@pmochine/vee-validate-laravel';

Vue.use(VeeValidate);
Vue.use(VeeValidateLaravel);
```


## 💪 How to use it

Somewhere in Laravel:

```php
$request->validate([
    'name' => 'required|min:3|max:255'
]);

```


Somewhere in Vue:


```vue
<template>
    <div class="form-group" v-bind:class="{'has-error' : errors.has('name')}">
        <label for="name">Name</label>
        <input 
            type="text" 
            name="name"
            class="form-control"
            v-model="name"
            v-validate="'required'" />
        <div v-show="errors.has('name')" class="help-block">{{ errors.first('name') }}</div>
    </div>
</template>

<script>
    export default {
        methods: {
            doValidation() {
                const data = {
                    name: this.name
                };
            
                axios.post('/example', data)
                    .then(res => {})
                    .catch(err => {
                        //adds errors to vee-validate errorBag and returns the errors as object
                        const errors = this.$addLaravelErrors(err.response);

                        if(errors){
                            alert(errors[Object.keys(errors)[0]]); 
                        }
                    });
            }
        }
    }
</script>
```

## Security

If you discover any security related issues, please don't email me. I'm afraid 😱. avidofood@protonmail.com

## Credits

Now comes the best part! 😍

 - Idea found on https://github.com/RobertGlynWilliams/vee-validate-laravel

Oh come on. You read everything?? If you liked it so far, hit the ⭐️ button to give me a 🤩 face. 
