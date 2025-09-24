import type { ISpecificationRepository } from "../../repositories/ISpecificationRepository.js";

interface IRequest{
    name: string;
    description: string;
}

class CreateSpecificationUseCase{

    constructor(private specificationsRepository: ISpecificationRepository){}

    execute({description, name}:IRequest):void{
        const specificationAlreadyExists = this.specificationsRepository.findByname(name)

        if(specificationAlreadyExists){
            throw new Error("Specification already exists!")
        }

        this.specificationsRepository.create({
            name,
            description

        })
    }
}

export {CreateSpecificationUseCase}