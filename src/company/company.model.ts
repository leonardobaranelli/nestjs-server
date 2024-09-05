import { Injectable } from '@nestjs/common';

@Injectable()
export class CompanyModel {
  getCompanyMessage(): string {
    return 'Hi, this is the company module';
  }
}
