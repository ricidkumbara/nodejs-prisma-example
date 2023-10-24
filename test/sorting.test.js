import { prismaClient } from '../src/prisma-client.js'

describe("Prisma Client", () => {
	it("should be do paging", async () => {
        const customers = await prismaClient.customer.findMany({
            skip: 0,
            take: 10,
            orderBy: [
                {
                    name: "desc"
                },
                {
                    email: "desc"
                }
            ]
        })

        console.log(customers)
    })
})