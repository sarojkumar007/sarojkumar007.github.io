---
title: "A Comprehensive Guide to Use Modules in Laravel 2024"
description: "Unlock the potential of Laravel's module management with our comprehensive guide. Learn how to"
date: "2024-02-24"
author: "Anshuman Bharatiya"
tags: ["PHP", "Laravel", "Web", "Modules", "Nwidart"]
---


**Quick Summary:**

Unlock the potential of Laravel's module management with our comprehensive guide. Learn how to effectively utilize modules to streamline your development process and enhance the scalability of your Laravel applications in 2024.

# Introduction

This guide provides an in-depth exploration of leveraging modules in Laravel development. We cover the installation and usage of nwidart/laravel-modules package, highlighting its benefits for managing large-scale Laravel applications. Learn how to efficiently add, remove, update, and delete modules to extend your application's features, all while ensuring maintainability and scalability in your Laravel projects.

The nwidart/laravel-modules package revolutionizes Laravel app management by introducing a modular approach. Modules, akin to Laravel packages, encapsulate views, controllers, and models, facilitating organized development. This Laravel 5-compatible package is a refined iteration of pingpong/modules, boasting ongoing maintenance. Widely adopted, it serves as a cornerstone in AsgardCMS development.

# Advantages of using Laravel Modules


1. **Modular Architecture:**

   Laravel Modules promote a modular architecture, allowing developers to organize their codebase into discrete, reusable components. This modular approach enhances code maintainability, scalability, and reusability, making it easier to manage large projects.

2. **Isolation of Functionality:**

   Modules encapsulate specific functionality within a Laravel application, enabling developers to isolate and manage features independently. This isolation minimizes dependencies between different parts of the application, reducing the risk of unintended side effects and making it easier to test and debug code.

3. **Enhanced Collaboration:**

   By dividing the application into modules, development teams can work on different parts of the system simultaneously without interfering with each other's code. This parallel development process improves productivity and collaboration among team members, as they can focus on developing and maintaining smaller, self-contained modules rather than dealing with the complexities of a monolithic codebase.

4. **Scalability and Extensibility:**

     Laravel Modules facilitate the creation of highly scalable and extensible applications. Developers can easily add new functionality to their applications by creating new modules or integrating existing ones. This modular approach enables applications to grow and evolve over time without sacrificing performance or stability. Additionally, modular architecture allows for the reuse of modules across different projects, saving time and effort in development.

# Requirements and Setup for Laravel Modules

**_Requirements for Laravel Modules Integration:_**

- PHP version 7.0+.
- [Laravel Framework](https://laravel.com/)
- [Composer](https://getcomposer.org/)
- [Laravel Modules Package(nwidart)](https://nwidart.com/laravel-modules/v6/introduction).
- Text Editor or IDE([Visual Studio Code](https://code.visualstudio.com/download), [Atom Editor](https://atom.en.lo4d.com/windows))etc.
- [XAMPP Tool](https://www.apachefriends.org/download.html)

**_Developer Should Know to Start Integrations_**

- Laravel Basics
- Basic Composer Commands & Artisan Command
- Knowledge of the Laravel folder structure
- Command Line Proficiency
- Working with Laravel and Database

# Step-by-Step Guide for using of Laravel Modules

Here's a step-by-step guide for integrating Laravel Modules:

## 1. Install Laravel Project

```cmd
composer global require laravel/installer

laravel new laravel-modules-system
```

or

```cmd
composer create-project laravel/laravel laravel-modules-system
```

After the project has been created, start Laravel's local development server using the Laravel's Artisan CLI serve command:

```cmd
cd laravel-modules-system

php artisan serve
```

## 2. Install the Laravel Modules package(nwidart)

The composer `require nwidart/laravel-modules` command is used to install the Laravel Modules package into a Laravel project using Composer. This package provides a modular architecture for Laravel applications, allowing developers to organize their codebase into separate modules, each encapsulating specific functionalities.

```cmd
composer require nwidart/laravel-modules
```

## 3. Publish the package's configuration file

The Below command is used in Laravel to publish the configuration file of the Laravel Modules package.

When you run the below command in your terminal within your Laravel project directory, it will copy the configuration file of the Laravel Modules package to your application's config directory. By publishing the configuration file, you gain the ability to customize and configure various aspects of the Laravel Modules package according to your project's requirements.

```cmd
php artisan vendor:publish --provider="Nwidart\Modules\LaravelModulesServiceProvider"
```

If you've run the above command  but find that the configuration files haven't been updated as expected, you may need to manually configure the `config/app.php` file. Here's a step-by-step guide on how to do this:

- Open `config/app.php` File: Navigate to the config directory of your Laravel project and open the `app.php` file in your preferred code editor.
- Add Laravel Modules Service Provider: Locate the providers array within the `app.php` file. Add the following line to the array:

```php:title=/config/app.php
    Nwidart\Modules\LaravelModulesServiceProvider::class,
```

- Add Laravel Modules Alias: Next, find the aliases array within the `app.php` file. Add the following line to the array:

```php:title=/config/app.php
    'Module' => Nwidart\Modules\Facades\Module::class,
```
- Clear Configuration Cache (Optional): If you have configuration caching enabled, you may need to clear the configuration cache using the `config:clear` Artisan command:

```cmd
    php artisan config:clear: Clears the configuration cache.
```

## 4. Autoloading

By default the module classes are not loaded automatically. To autoload your module classes using `psr-4` in the `composer.json` file, you need to add the following lines within the autoload section:

```json
"autoload": {
    "psr-4": {
        "App\\": "app/",
        "Database\\Factories\\": "database/factories/",
        "Database\\Seeders\\": "database/seeders/",
        "Modules\\": "Modules/"
    }
}
```

The command composer `dump-autoload` is used in Laravel to regenerate the Composer autoloader files. This command is necessary whenever changes are made to the autoload configuration in the composer.json file or when new classes are added to the project.

When you run `composer dump-autoload` in your terminal within your Laravel project directory, Composer will re-scan your project's files and directories, updating the autoloader files `(vendor/autoload.php)` accordingly. This ensures that your classes can be autoloaded correctly without any manual intervention.

Running `composer dump-autoload` is essential to ensure that your Laravel application functions properly and that all classes are autoloaded as expected based on the defined autoload configurations.

```cmd
composer dump-autoload
```

## 5. Creating a module

Creating a module is simple and straightforward. Run the following command to create a module.

```cmd
php artisan module:make <moduleName>
```
Replace `<moduleName>` by your desired name.

It is also possible to create multiple modules in one command.

```cmd
php artisan module:make Blog User Auth
```



## 6. Custom namespaces

When you create a new module it also registers new custom namespace for `Lang`, `View` and `Config`. For example, if you create a new module named blog, it will also register new namespace/hint blog for that module. Then, you can use that namespace for calling `Lang`, `View` or `Config`. Following are some examples of its usage:

**Calling Lang:**
```
Lang::get('blog::group.name');

@trans('blog::group.name');
```

**Calling View:**
```
view('blog::index')

view('blog::partials.sidebar')
```

**Calling Config:**
```
Config::get('blog.name')
```

## 7. Managing Modules

These are Artisan commands provided by the Laravel Modules package for managing modules within your Laravel application:

`php artisan module:list`: This command lists all the modules that are currently available in your Laravel application. It provides information such as the module name, status (enabled or disabled), version, and path.

`php artisan module:enable Blog`: This command enables the specified module. Replace "Blog" with the name of the module you want to enable. Enabling a module allows its functionality to be utilized within the application.

`php artisan module:disable Blog`: This command disables the specified module. Replace "Blog" with the name of the module you want to disable. Disabling a module prevents its functionality from being used within the application.

`php artisan module:delete Blog`: Replace "Blog" with the name of the module you want to delete. When you run this command in your terminal within your Laravel project directory, it will prompt you to confirm the deletion of the specified module. Once confirmed, the module and all associated files will be deleted from your project.

`php artisan module:update Blog`: Update the given module.

These commands are useful for managing modules within your Laravel application, allowing you to easily enable, disable, update, delete specific modules based on your project's requirements.


## 8. Other Artisan commands

> Note all the following commands use "Blog" as example module name, and example class/file names.

## Utility commands

### module:use

Use a given module. This allows you to not specify the module name on other commands requiring the module name as an argument.

```cmd
php artisan module:use Blog
```

### module:unuse

This unsets the specified module that was set with the `module:use` command.

```cmd
php artisan module:unuse
```

### module:migrate

Migrate the given module, or without a module an argument, migrate all modules.

```cmd
php artisan module:migrate Blog
```

### module:migrate-rollback

Rollback the given module, or without an argument, rollback all modules.

```cmd
php artisan module:migrate-rollback Blog
```

### module:migrate-refresh

Refresh the migration for the given module, or without a specified module refresh all modules migrations.

```cmd
php artisan module:migrate-refresh Blog
```

### module:migrate-reset Blog

Reset the migration for the given module, or without a specified module reset all modules migrations.

```cmd
php artisan module:migrate-reset Blog
```

### module:seed

Seed the given module, or without an argument, seed all modules

```cmd
php artisan module:seed Blog
```

### module:publish-migration

Publish the migration files for the given module, or without an argument publish all modules migrations.

```cmd
php artisan module:publish-migration Blog
```

### module:publish-config

Publish the given module configuration files, or without an argument publish all modules configuration files.

```cmd
php artisan module:publish-config Blog
```

### module:publish-translation

Publish the translation files for the given module, or without a specified module publish all modules migrations.

```cmd
php artisan module:publish-translation Blog
```


## Generator commands

### module:make-command

Generate the given console command for the specified module.

```cmd
php artisan module:make-command CreatePostCommand Blog
```

### module:make-migration

Generate a migration for specified module.

```cmd
php artisan module:make-migration create_posts_table Blog
```

### module:make-seed

Generate the given seed name for the specified module.

```cmd
php artisan module:make-seed seed_fake_blog_posts Blog
```

### module:make-controller

Generate a controller for the specified module.

```cmd
php artisan module:make-controller PostsController Blog
```

### module:make-model

Generate the given model for the specified module.

```cmd
php artisan module:make-model Post Blog
```
***Optional options:***

- `--fillable=field1`,`field2`: set the fillable fields on the generated model
- `--migration`, `-m`: create the migration file for the given model

### module:make-provider

Generate the given service provider name for the specified module.

```cmd
php artisan module:make-provider BlogServiceProvider Blog
```

### module:make-middleware

Generate the given middleware name for the specified module.

```cmd
php artisan module:make-middleware CanReadPostsMiddleware Blog
```

### module:make-mail

Generate the given mail class for the specified module.

```cmd
php artisan module:make-mail SendWeeklyPostsEmail Blog
```

### module:make-notification

Generate the given notification class name for the specified module.

```cmd
php artisan module:make-notification NotifyAdminOfNewComment Blog
```

### module:make-listener

Generate the given listener for the specified module. Optionally you can specify which event class it should listen to. It also accepts a `--queued` flag allowed queued event listeners.

```cmd
php artisan module:make-listener NotifyUsersOfANewPost Blog
```

```cmd
php artisan module:make-listener NotifyUsersOfANewPost Blog --event=PostWasCreated
```

```cmd
php artisan module:make-listener NotifyUsersOfANewPost Blog --event=PostWasCreated --queued
```

### module:make-request

Generate the given request for the specified module.

```cmd
php artisan module:make-request CreatePostRequest Blog
```
### module:make-event

Generate the given event for the specified module.

```cmd
php artisan module:make-event BlogPostWasUpdated Blog
```

### module:make-job

Generate the given job for the specified module.

```cmd
php artisan module:make-job JobName Blog
```

```cmd
php artisan module:make-job JobName Blog --sync # A synchronous job class
```

### module:route-provider

Generate the given route service provider for the specified module.

```cmd
php artisan module:route-provider Blog
```

### module:make-factory

Generate the given database factory for the specified module.

```cmd
php artisan module:make-factory FactoryName Blog
```

### module:make-policy

Generate the given policy class for the specified module.

The `Policies` is not generated by default when creating a new module. Change the value of `paths.generator.policies` in `modules.php` to your desired location.

```cmd
php artisan module:make-policy PolicyName Blog
```

### module:make-rule

Generate the given validation rule class for the specified module.

The `Rules` folder is not generated by default when creating a new module. Change the value of `paths.generator.rules` in `modules.php` to your desired location.

```cmd
php artisan module:make-rule ValidationRule Blog
```

### module:make-resource

Generate the given resource class for the specified module. It can have an optional `--collection` argument to generate a resource collection.

The `Transformers` folder is not generated by default when creating a new module. Change the value of `paths.generator.resource` in `modules.php` to your desired location.

```cmd
php artisan module:make-resource PostResource Blog
```

```cmd
php artisan module:make-resource PostResource Blog --collection
```

### module:make-test

Generate the given test class for the specified module.

```cmd
php artisan module:make-test EloquentPostRepositoryTest Blog
```

## Click Here for [Source Code](https://github.com/AnshumanBharatiya/laravel-modules-system "GitHub")

# Conclusion

In conclusion, Laravel Modules offer a powerful and efficient way to structure and organize Laravel applications, particularly for managing large-scale projects. By adopting a modular architecture, developers can isolate functionalities into separate modules, leading to improved code maintainability, scalability, and reusability. The use of Laravel Modules streamlines the development process, allowing teams to work on different parts of the application independently while promoting collaboration and code consistency. With the ability to easily add, remove, and update modules, developers can adapt their applications to evolving requirements with minimal disruption. Overall, Laravel Modules represent a valuable tool for enhancing productivity and facilitating the development of robust and flexible Laravel applications. Happy coding!

<br>

**_Posted By ~ Anshuman Bharatiya on Saturday, 24 February 2024_**

**_If you like this post, feel free to share it._**

**_Thank You_**