import{test, expect  } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Sauce demo login', ()=>{

    //testcase 1
    test("Successful Login", async ({page})=>{
const loginPage = new LoginPage(page);
await loginPage.navigate();
await loginPage.login('standard_user','secret_sauce');
await expect(page).toHaveURL(/inventory/);
console.log("INVENTORY");
 });

 //test case 2
 test("Invalid login", async ({page})=>{
const loginPage = new LoginPage(page);
await loginPage.navigate();
await loginPage.login('invalid_user', 'invalid_password');

await expect(loginPage.errorMessage).toBeVisible();
await console.log("Invalid credentials");
 });

    });
