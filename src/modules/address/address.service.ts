import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Address } from './address.model';

@Injectable()
export class AddressService {
    constructor(
        @InjectModel(Address)
        private addressModel: typeof Address
        ) {}

    async create(address: Address) {
        const newPerson = await this.addressModel.create(address);
        return newPerson;
    }
}
