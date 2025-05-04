// src/appwrite.js
import { Client, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://fra.cloud.appwrite.io/v1') // Укажите ваш эндпоинт
  .setProject('68178c800010b89a0702'); // Укажите ваш проект ID

const databases = new Databases(client);

export { client, databases };