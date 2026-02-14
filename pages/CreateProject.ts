import { Page, Locator} from '@playwright/test';
import { setTimeout } from 'timers/promises';

export class createProject{
    readonly page: Page;
    readonly createProjectButton: Locator;
    readonly projectName: Locator;




    constructor(page:Page){
        this.page = page;
        this.createProjectButton = page.getByRole('button', {name:'Create new project'});
        this.projectName = page.getByRole('textbox', {name: 'Enter a unique project name here'});

}
async createProject(projectName: string){
    await this.createProjectButton.click();
    await this.projectName.click();
    await this.projectName.fill(projectName)
}
}

