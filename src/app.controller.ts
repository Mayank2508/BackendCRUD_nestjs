import { Controller, Get,Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type','text/html')
  getHello(){
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>History</title>
      </head>
      <body>
        <h1>History</h1>
        <table>
        <tr>
          <th> GET Request </th>
          <th> Description </th>
        </tr>
        <tr>
        <td>
        HTML
        </td>

        <td>
        Lists all the get endpoint samples you can demo (like below)
        </td>
        </tr>

        <tr>
        <td>
        /history
        </td>

        <td>
        HTML
        Lists the last 20 operations performed on the server, and the answers.
        </td>
        </tr>

        <tr>
        <td>
        /5/plus/3
        </td>
        
        <td>
        JSON
        </td>
        </tr>

        <tr>
        <td>
        {question:”5+3”,answer: 8}
        </td>
        
        <td>
        /3/minus/5
        </td>
        </tr>
        
        <tr>
        <td>
        JSON
        </td>
        <td>
        {question:”3-5”, answer: -2}
        </td>
        <td>
        /3/minus/5/plus/8
        </td>
        </tr>
        
        <tr>
        <td>
        JSON
        </td>
        <td>
        {question:”3-5+8”, answer: 6}
        </td>
        
        
        <td>
        /3/into/5/plus/8/into/6
        </td>
        </tr>
        <tr>
        <td>
        JSON
        </td>
        <td>
        {question:”3*5+8*6”, answer: 63}
        </td>
        </tr>
        
        <table>
      </body>
    </html>
  `;
  }
}
