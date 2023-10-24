import { prismaClient } from '../src/prisma-client.js'

describe("Prisma Client", () => {
    // it("should be execute sequential transactin", async () => {
    //     const [ricid, ricidKumbara] = await prismaClient.$transaction([
    //         prismaClient.customer.create({
    //             data: {
    //                 id: '1',
    //                 name: 'Ricid',
    //                 email: 'ricid@gmail.com',
    //                 phone: '0800',
    //             }
    //         }),
    //         prismaClient.customer.create({
    //             data: {
    //                 id: '2',
    //                 name: 'Ricid Kumbara',
    //                 email: 'ricidkumbara@gmail.com',
    //                 phone: '08001111',
    //             }
    //         }),
    //     ])

    //     expect(ricid.name).toBe("Ricid")
    //     expect(ricidKumbara.name).toBe("Ricid Kumbara")
    // })

    it("should be execute interactinve transactin", async () => {
        const [ricid, ricidKumbara] = await prismaClient.$transaction(async (prisma) => {
            const ricid = await prisma.customer.create({
                data: {
                    id: '3',
                    name: 'Ricid',
                    email: 'ricid1@gmail.com',
                    phone: '08001',
                }
            })

            const ricidKumbara = await prisma.customer.create({
                data: {
                    id: '4',
                    name: 'Ricid Kumbara',
                    email: 'ricidkumbara@2gmail.com',
                    phone: '080011111',
                }
            })

            return [ricid, ricidKumbara]
        })

        expect(ricid.name).toBe("Ricid")
        expect(ricidKumbara.name).toBe("Ricid Kumbara")
    })
})