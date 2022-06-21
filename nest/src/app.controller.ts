import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Get post by id
   * @param idPost 
   * @returns 
   */
  @Get('posts/:idPost')
  async postById(@Param("idPost", ParseIntPipe) idPost: number) {
    return await this.appService.getPostById(idPost);
  }

  @Get('posts')
  async posts() {
    return await this.appService.getPosts();
  }

}
