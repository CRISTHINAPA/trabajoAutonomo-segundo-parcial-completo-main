import { CreateAlergiaDto } from '../../dtos';
import { AlergiasEntity } from '../../entities/Alergias.entity';
import { AlergiasRepository } from '../../repositories/Alergias.repository';


export interface CreateAlergiaUseCase {
  execute( dto: CreateAlergiaDto ): Promise<AlergiasEntity>
}

// ctrl+ shift + l
export class CreateAlergia implements CreateAlergiaUseCase {
  
  constructor(
    private readonly repository: AlergiasRepository,
  ) {}
  
  execute( dto: CreateAlergiaDto ): Promise<AlergiasEntity> {
    return this.repository.create(dto);
  }

}