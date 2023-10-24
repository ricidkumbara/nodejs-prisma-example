import { prismaClient } from '../src/prisma-client.js'

describe("Prisma Client", () => {
    // it("should be create many record", async () => {
    //     const {count} = await prismaClient.customer.createMany({
    //         data: [
    //             {
    //                 id: "1",
    //                 name: "Ricid",
    //                 email: "ricidkumbara@gmail.com",
    //                 phone: "08000000000",
    //             },
    //             {
    //                 id: "2",
    //                 name: "Ricid Kumbara",
    //                 email: "ricidkumbara2@gmail.com",
    //                 phone: "080000000002",
    //             }
    //         ]
    //     })

    //     expect(count).toBe(2)
    // })

    it("should be update many record", async () => {
        const {count} = await prismaClient.customer.updateMany({
            data: {
                email: "ricidupdate@gmail.com"
            },
            where: {
                name: "Ricid"
            }
        })

        expect(count).toBe(1)
    })

    it("should be delete many record", async () => {
        const {count} = await prismaClient.customer.deleteMany({
            where: {
                name: "Tidak Ada"
            }
        })

        expect(count).toBe(0)
    })

    it("should be find many record", async () => {
        const customer = await prismaClient.customer.findMany({})
        expect(customer.length).toBe(2)
    })
})