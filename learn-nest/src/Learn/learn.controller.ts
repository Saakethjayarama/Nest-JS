import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LearnService } from './learn.service';

@Controller('learn')
export class LearnController {
  constructor(private readonly learnService: LearnService) {}

  @Get()
  getProducts(): { name: string; price: number }[] {
    return this.learnService.getProducts();
  }

  /**
   * * Passing key as param to Body will get exact value of key
   */
  @Post()
  getProduct(
    @Body() product: { name: string; price: number },
  ): { name: string; price: number } {
    return this.learnService.postProduct(product);
  }

  @Get('/id/:id')
  getProductById(
    @Param('id') id: number,
  ): { id: number; name: string; price: number } {
    return {
      id: id,
      name: 'Dell',
      price: 70000,
    };
  }
}
