import { Controller, Get } from '@nestjs/common';
import { CompanyModel } from './company.model';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyModel: CompanyModel) {}

  @Get()
  getCompanyMessage(): string {
    return this.companyModel.getCompanyMessage();
  }
}
