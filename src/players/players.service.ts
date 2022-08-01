import { Injectable, Logger } from '@nestjs/common';
import { generateUUID } from 'src/helpers/uuid';
import { CreatePlayerDTO } from './dtos/create-player.dto';
import { Player } from './interfaces/player.interface';

@Injectable()
export class PlayersService {
  private players: Player[] = [];
  private readonly logger = new Logger(PlayersService.name);

  async createPlayer(createPlayerDTO: CreatePlayerDTO): Promise<void> {
    this.logger.log(`createPlayer: ${createPlayerDTO}`);
    await this.create(createPlayerDTO);
  }

  async listPlayers(): Promise<Player[]> {
    return this.players;
  }

  private create(createPlayerDTO: CreatePlayerDTO): void {
    const { name, email, phoneNumber } = createPlayerDTO;
    const player: Player = {
      _id: generateUUID(),
      avatarUrl: '',
      email,
      name,
      phoneNumber,
      ranking: 'A',
      rankingPosition: 1,
    };
    this.players.push(player);
  }
}
