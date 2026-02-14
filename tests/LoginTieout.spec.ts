import { test } from '@playwright/test';
import { LoginPagetieout } from '../pages/LoginPagetieout';
import { createProject } from '../pages/createProject';
import * as XLSX from 'xlsx'
import path from 'path';

const userDataFile = path.join(__dirname, '../Data/UserData.xlsx');

interface UserData{
    Email: string;
    Password: string;
    Role: string;
}

test('Login to EO', async({page}) =>{
    const workbook = XLSX.readFile(userDataFile);
    const worksheet = workbook.Sheets['Sheet1'];
    const xlsxToJson = XLSX.utils.sheet_to_json<UserData>(worksheet);

    const targetRole = 'EO';
    const user = xlsxToJson.find(u => u.Role === targetRole)
    if(!user) throw new Error(`No user found for role: ${targetRole}`);
    const loginPage = new LoginPagetieout(page)
    const createproject = new createProject(page)

    await loginPage.goto('https://q-tieout.aaps.deloitte.com/');    
    await loginPage.enterEmail(user.Email)
    await loginPage.enterPassword(user.Password)
    await page.waitForTimeout(5000)
  await createproject.createProject('Test')

});


