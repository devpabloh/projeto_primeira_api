import type { Specification } from "../model/Specification.js";


interface ICreateSpecificationDTO{
    name: string;
    description: string;
}

interface ISpecificationRepository{

    create({description,name}: ICreateSpecificationDTO):void
    findByname(name: string): Specification;
}

export type { ICreateSpecificationDTO, ISpecificationRepository };