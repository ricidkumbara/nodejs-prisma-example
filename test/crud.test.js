import {prismaClient} from '../src/prisma-client.js'

describe("Prisma Client", () => {
	// it('should be able to create sql', async () => {
	// 	const customer = await prismaClient.customer.create({
    //         data: {
    //             id: "ricid",
    //             name: "Ricid Kumbara",
    //             email: "ricidkumbara@gmail.com",
    //             phone: "08000000000",
    //         }
    //     })

    //     expect(customer.id).toBe("ricid")
    //     expect(customer.name).toBe("Ricid Kumbara")
    //     expect(customer.email).toBe("ricidkumbara@gmail.com")
    //     expect(customer.phone).toBe("08000000000")
 	// })

    // it('should be able to update sql', async () => {
	// 	const customer = await prismaClient.customer.update({
    //         data: {
    //             name: "Ricid Kumbara Update",
    //         }, 
    //         where: {
    //             id: 'ricid'
    //         }
    //     })

    //     expect(customer.name).toBe("Ricid Kumbara Update")
 	// })

    // it('should be able to find unique sql', async () => {
	// 	const customer = await prismaClient.customer.findUnique({
    //         where: {
    //             id: 'ricid'
    //         }
    //     })

        
    //     expect(customer.id).toBe("ricid")
    //     expect(customer.name).toBe("Ricid Kumbara Update")
    //     expect(customer.email).toBe("ricidkumbara@gmail.com")
    //     expect(customer.phone).toBe("08000000000")
 	// }) 
    
     it('should be able to delete sql', async () => {
		const customer = await prismaClient.customer.delete({
            where: {
                id: 'ricid'
            }
        })
        
        expect(customer.id).toBe("ricid")
        expect(customer.name).toBe("Ricid Kumbara Update")
        expect(customer.email).toBe("ricidkumbara@gmail.com")
        expect(customer.phone).toBe("08000000000")
 	}) 
})