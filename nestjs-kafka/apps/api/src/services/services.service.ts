import {Inject, Injectable} from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import {Producer} from "@nestjs/microservices/external/kafka.interface";

@Injectable()
export class ServicesService {
  constructor(@Inject('KAFKA_PRODUCER') private kafkaProducer: Producer) {}

  create(createServiceDto: CreateServiceDto) {
    const id = Math.floor(Math.random() * 100);
    console.log(createServiceDto)
    this.sendKafkaEvent(`${id}`, {
      eventType: 'ServiceCreated',
      id,
      ...createServiceDto,
    });
    return 'This action adds a new service';  }

  findAll() {
    return `This action returns all services`;
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    updateServiceDto.id = id;

    this.sendKafkaEvent(`${id}`, {
      eventType: 'ServiceUpdated',
      ...updateServiceDto,
    });
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }



  sendKafkaEvent(key, value) {
    this.kafkaProducer.send({
      topic: 'services',
      messages: [{ key, value: JSON.stringify(value) }],
    });
  }
}
