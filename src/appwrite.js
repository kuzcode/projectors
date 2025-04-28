// src/appwrite.js
import { Client, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://fra.cloud.appwrite.io/v1') // Укажите ваш эндпоинт
  .setProject('680f76c9001efaaf090a'); // Укажите ваш проект ID

const databases = new Databases(client);

export { client, databases };