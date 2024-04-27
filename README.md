# Building an Email Template Creator with Strapi CMS & Nuxt 3 | Full Tutorial

 In this tutorial, we will be building an Email Template Creator with Strapi CMS & Nuxt 3. We will be using Strapi as our headless CMS to manage our email templates and Nuxt 3 to build the frontend of our application.

## Tutorial link

[![Cover](/cover.png)](https://youtu.be/qeCSlwSKrqw)

### [Building an Email Template Creator with Strapi CMS & Nuxt 3 | Full Tutorial](https://youtu.be/qeCSlwSKrqw)

## Prerequisites

Before we get started, make sure you have the following installed on your machine:

- Node.js (v18 or higher)
- A package manager like npm or yarn


## Getting Started

To get started, we will need to clone this repository.

For the `client` folder, we will be using Nuxt 3 to build the frontend of our application. Create a `.env` file in the `client` folder and add the values from the `.env.example` file to it. Ensure that you fill in the correct values.

Head to the `backend` folder and do the same. Create a `.env` file and add the values from the `.env.example` file to it. Ensure that you fill in the correct values.

Next, we will need to install the dependencies for both the `client` and `backend` folders. Use your favorite package manager to do so.

---

## What is Strapi CMS?

Strapi is an open-source headless content management system (CMS) built with Node.js. It enables developers to create powerful and customizable APIs with ease, allowing content to be managed and delivered across different platforms and devices.

## Key features of Strapi CMS

- It's a **Headless CMS** that does not dictate how content is present on the frontend
- It has **Customizable Content Types** that gives the developer the power to define their own content types and attributes.
- It provides **RESTful and GraphQL APIs**
- It gives **User Authentication and Permissions** out of the box
- Its modular architecture allows developers to extend its functionality with custom plugins or by installing existing ones from the Strapi marketplace([market.strapi.io/](https://market.strapi.io/))
- Strapi supports various databases, including  PostgreSQL, MySQL, SQLite, and MariaDB, giving developers the flexibility to choose the database that best suits their project requirements.

## Key Terms

- **Content Type**- It's like defining the blueprint for your database tables, specifying what kind of information they will store.
- **Collection Type** -  Stores multiple entries of the same content type. Think of it as a container for similar items, like a list of products in an online store.
- **Single Type** -  Stores only one entry of data, typically for singleton information. It's like having a single file to store unique settings or configurations for your entire application.
- **API** -   Interface for interacting with your application's data. It's like a waiter in a restaurant who takes your order (request) and brings you the food (response).
- **Plugin** - This adds additional functionality to your Strapi project.  If you want to extend the core functionalities of your Strapi project, you can add a community plugin or create one of your own.
- **Roles and Permissions** - Manage access control for users and content. It's like setting up rules to decide who can access certain areas or perform specific actions in your application, similar to granting different levels of access in a building.
- **Middleware** - Functions executed before or after a request is handled. It's like filters that clean or modify data before it reaches its destination, similar to a security checkpoint at an airport.
- **Lifecycle Hooks** - Functions triggered at different stages of an operation. They're like alarms that go off at specific times during a process, allowing you to perform custom actions, like sending a notification when a new user signs up.

