import {prismaClient} from '../src/prisma-client.js'

// describe("Prisma Client", () => {
// 	it('should be able to execute sql', async () => {
// 		const id = '3'
// 		const name = 'Ricid Kumbara'

// 		const impacted = await prismaClient.$executeRaw`insert into sample(id, name) values (${id}, ${name})`
// 		expect(impacted).toBe(1)
// 	})
// })