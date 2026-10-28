import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(@InjectRepository(Employee) private readonly repo: Repository<Employee>) {}
  async create(dto: CreateEmployeeDto) {
    const employee = this.repo.create(dto);
    const saved = await this.repo.save(employee);
    const { password, ...safe } = saved;
    return safe;
  }
  findAll() { return this.repo.find({ order: { id: 'ASC' } }); }
  async findOne(id: number) {
    const employee = await this.repo.findOne({ where: { id } });
    if (!employee) throw new NotFoundException(`Employee ${id} not found`);
    return employee;
  }
  async update(id: number, dto: UpdateEmployeeDto) {
    const employee = await this.findOne(id);
    Object.assign(employee, dto);
    await this.repo.save(employee);
    const { password, ...safe } = employee;
    return safe;
  }
  async remove(id: number) {
    const employee = await this.findOne(id);
    await this.repo.remove(employee);
    return { message: `Employee ${id} deleted successfully` };
  }
}
