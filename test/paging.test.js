import {prismaClient} from '../src/prisma-client.js'

describe("Prisma Client", () => {
	it("should be do paging", async () => {
        const page1 = await prismaClient.customer.findMany({
            skip: 0,
            take: 1,
        })
    
        expect(page1.length).toBe(1)
    
        const page2 = await prismaClient.customer.findMany({
            skip: 1,
            take: 1,
        })
    
        expect(page2.length).toBe(1)
    })
})