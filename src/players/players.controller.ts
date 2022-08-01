import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlayerDTO } from './dtos/create-player.dto';
import { PlayersService } from './players.service';

@Controller('ap1/v1/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post('/createPlayer')
  async createPlayer(@Body() createPlayerDTO: CreatePlayerDTO) {
    this.playersService.createPlayer(createPlayerDTO);
  }

  @Get('/listPlayers')
  async listPlayers() {
    return this.playersService.listPlayers();
  }
}
