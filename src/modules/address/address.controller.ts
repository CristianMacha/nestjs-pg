import { Body, Controller, Post } from '@nestjs/common';
import { Address } from './address.model';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
    constructor(private addressServices: AddressService) {}

    @Post()
    async create(@Body() address: Address) {
        return await this.addressServices.create(address);
    }
}
